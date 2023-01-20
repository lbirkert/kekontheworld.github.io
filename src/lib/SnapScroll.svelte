<script lang="ts">
	import type { WithTarget } from "src/app";

    import { goto } from "$app/navigation";

    import { page } from "$app/stores";

    import { onMount } from "svelte";

    import { writable } from "svelte/store";

    import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    export let sections: string[];
    export let wheellock = 500;
    export let position = writable(0);
    export let active: { [key: number]: boolean } = {};

    let _position = 0;
    let activeTm: { [key: number]: number } = {};

    function resetActive(position: number) {
        activeTm[position] = window.setTimeout(() => active[position] = false, 300);
    }

    function clearActive(position: number) {
        clearTimeout(activeTm[position]);
    }

    function setActive(position: number) {
        activeTm[position] = window.setTimeout(() => active[position] = true, Math.abs(_position - position) * 90 + 90);
    }
    
    let wheelLocked = false;
    let scrollY: number;

    let scroll = writable(false);
    let scrollTm: number;
    $: {
        clearInterval(scrollTm);
        let _scroll = $position === sections.length - 1;
        if(_scroll !== $scroll) {
            if(_scroll) scrollTm = window.setTimeout(() => $scroll = true, 500);
            else $scroll = false;
        }
    };

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
            
            if(_hash === "footer") {
                $position = sections.length - 1;
                scrollY = -1;
                return;
            }

            if(_position === -1) _position = 0;
            if(_position !== $position) $position = _position;
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

    function onWheel(e: WithTarget<WheelEvent, HTMLDivElement>) {
        console.log("WHEEL", e);
        if(scrollY === 0) {
            if(!wheelLocked) {
                let deltaY = e.deltaY > 0 ? 1 : (e.deltaY < 0 ? -1 : 0);
                let _position = $position + deltaY;
                
                if(_position < sections.length && _position >= 0) {
                    lockWheel();
                    $position = _position;
                }
            }
        }
    };

    let touchStart: number;
    let touchMove: number;

    function onTouchStart(e: WithTarget<TouchEvent, HTMLDivElement>) {
        touchStart = e.touches[0].clientY;
    };
    
    function onTouchMove(e: WithTarget<TouchEvent, HTMLDivElement>) {
        touchMove = e.touches[0].clientY;

    };
    
    function onTouchEnd(/*e: WithTarget<TouchEvent, HTMLDivElement>*/) {
        /* && (e.target as HTMLElement).nodeName === "SECTION" Removed to provide smoother scroll experience */
        if(scrollY === 0 && touchMove !== -1) {
            const dy = touchStart - touchMove;

            console.log(dy);

            if(dy > 100 && $position + 1 < sections.length) $position++;
            else if(dy < -100 && $position > 0) $position--;

            touchMove = -1;
        }

        touchStart = 0;
    };
    
    function onKeyDown(e: WithTarget<KeyboardEvent, Window>) {
        if(scrollY === 0) {
            let deltaY = e.key === "ArrowDown" ? 1 : (e.key === "ArrowUp" ? -1 : 0);
            let _position = $position + deltaY;
                    
            if(_position < sections.length && _position >= 0) {
                $position = _position;
            }
        }
    };
</script>

<svelte:window on:keydown={onKeyDown} bind:scrollY={scrollY}></svelte:window>

<div class="scroller" on:wheel|passive={onWheel}
    class:active={active[$position]}
    on:touchstart|passive={onTouchStart} on:touchend={onTouchEnd}
    on:touchmove={onTouchMove}>

    <div class="wrapper" style:transform="translateY(-{$position * 100}vh)">
        <slot/>
    </div>

    {#if scrollY === 0}
    <button class="down" on:click|preventDefault={() => {
        if($position !== sections.length - 1) $position++;
        else goto("#footer");
    }} aria-label="Scroll down">
        <Fa icon={faArrowDown} />
    </button>
    {/if}
</div>

<style lang="postcss">
    .scroller {
        @apply h-full overflow-hidden relative flex justify-center flex-col items-center;
    }

    .wrapper {
        @apply min-h-full transition-transform duration-500 will-change-transform;
    }

    .scroller .down {
        @apply absolute text-2xl animate-bounce opacity-0 w-20 h-20 flex items-center justify-center
            dark:text-white/40 text-black/40 cursor-pointer z-10;
    }

    .scroller .down {@apply bottom-0}

    .scroller.active .down {
        @apply opacity-100 transition-opacity duration-1000 delay-1000;
    }
</style>
