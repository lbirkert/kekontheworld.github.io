<script lang="ts">
    import { goto } from "$app/navigation";

    import { page } from "$app/stores";

    import { onMount } from "svelte";
    import { spring } from "svelte/motion";
    import { writable } from "svelte/store";

    export let sections: string[];
    export let height: number[] | number;
    export let wheellock: number = 500;

    let wheelLocked: boolean = false;
    let scrollY: number = 0;

    let position = writable(0);
    let gotoPosition: number = 0;
    let currentPosition = spring($position);
    $: $currentPosition = gotoPosition;

    $: {
        if(height) {
            if(typeof height == "number") gotoPosition = $position * height;
            else gotoPosition = height.slice(0, $position).reduce((k, v) => k + v, 0);  
        }
    };

    let scroll = writable(false);
    $: $scroll = $position + 2 > sections.length && 
        (gotoPosition / 40).toFixed(0) === ($currentPosition / 40).toFixed(0);
    

    function lockWheel() {
        wheelLocked = true;
        setTimeout(() => wheelLocked = false, wheellock);
    }

    onMount(() => {
        scroll.subscribe(v => document.body.style.overflow = v ? "" : "hidden");

        setTimeout(()=>window.scrollTo(0, 0), 1);

        page.subscribe(p => {
            let _hash = p.url.hash.substring(1);
            let _position = sections.indexOf(_hash);
            if(_position !== $position) $position = _position;
        });

        position.subscribe(p => goto("#" + sections[p]));
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

<svelte:window on:keydown={onKeyDown} bind:scrollY></svelte:window>

<div class="scroller" on:wheel={onWheel}>
    <div class="wrapper" style:transform="translateY(-{$currentPosition}px)">
        <slot/>
    </div>
</div>

<style lang="postcss">
    .scroller {
        height: 100%;
        overflow: hidden;
    }

    .wrapper {
        min-height: 100%;
    }
</style>