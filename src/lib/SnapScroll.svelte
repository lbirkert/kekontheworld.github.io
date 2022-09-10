<script lang="ts">
    import { goto } from "$app/navigation";

    import { page } from "$app/stores";

    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    export let sections: string[];
    export let height: number[] | number;
    export let wheellock: number = 500;
    export let position = writable(0);
    export let active: {[key: number]: boolean} = {};

    let _position: number = 0;
    let activeTm: {[key: number]: NodeJS.Timeout} = {};

    function resetActive(position: number) {
        activeTm[position] = setTimeout(() => active[position] = false, 300);
    }

    function clearActive(position: number) {
        clearTimeout(activeTm[position]);
    }

    function setActive(position: number) {
        activeTm[position] = setTimeout(() => active[position] = true, Math.abs(_position - position) * 90 + 90);
    }
    
    let wheelLocked: boolean = false;
    let scrollY: number;
    
    let gotoPosition: number = 0;
    
    $: if(height) gotoPosition = calculatePosition($position, height);

    let scroll = writable(false);
    let scrollTm: NodeJS.Timeout;
    $: {
        clearInterval(scrollTm);
        let _scroll = $position === sections.length - 1;
        if(_scroll !== $scroll) {
            if(_scroll) scrollTm = setTimeout(() => $scroll = true, 500);
            else $scroll = false;
        }
    };

    function calculatePosition(position: number, height: number | number[]): number {
        return typeof height == "number" ? position * height :
            height.slice(0, position).reduce((k, v) => k + v, 0);
    }

    function lockWheel() {
        wheelLocked = true;
        setTimeout(() => wheelLocked = false, wheellock);
    }

    onMount(() => {
        scroll.subscribe(v => v ? document.body.classList.add("scroll") : 
            document.body.classList.remove("scroll"));

        setTimeout(()=>window.scrollTo(0, 0), 1);

        page.subscribe(p => {
            let _hash = p.url.hash.substring(1);
            let _position = sections.indexOf(_hash);
            if(_position === -1) _position = 0;
            if(_position !== $position) {
                $position = _position;
                // Force scroll up
                if(scrollY !== 0) {
                    const intv = setInterval(() => {
                        if(scrollY === 0) clearInterval(intv);
                        else window.scrollTo(0, 0);
                    }, 10);
                }
            }
        });

        position.subscribe(p => {
            resetActive(_position);
            clearActive(p);
            setActive(p);

            _position = p;

            let _hash = $page.url.hash.substring(1);
            let hash = sections[p];
            if(hash !== _hash) goto("#" + hash);
            
        });
    });

    const onWheel = function(e) {
        if(scrollY === 0) {
            if(wheelLocked) e.preventDefault();
            else {
                let deltaY = e.deltaY > 0 ? 1 : (e.deltaY < 0 ? -1 : 0);
                let _position = $position + deltaY;
                
                if(_position < sections.length && _position >= 0) {
                    lockWheel();
                    $position = _position;
                }
            }
        }
    } as svelte.JSX.WheelEventHandler<HTMLDivElement>;

    const onKeyDown = function(e) {
        if(scrollY === 0) {
            let deltaY = e.key === "ArrowDown" ? 1 : (e.key === "ArrowUp" ? -1 : 0);
            let _position = $position + deltaY;
                    
            if(_position < sections.length && _position >= 0) {
                $position = _position;
            }
        }
    } as svelte.JSX.KeyboardEventHandler<Window>;
</script>

<svelte:window on:keydown={onKeyDown} bind:scrollY={scrollY}></svelte:window>

<div class="scroller" on:wheel={onWheel}>
    <div class="wrapper" style:transform="translateY(-{gotoPosition}px)">
        <slot/>
    </div>
</div>

<style lang="postcss">
    .scroller {
        height: 100%;
        overflow: hidden;
    }

    .wrapper {
        @apply min-h-full transition-transform duration-500;
    }
</style>