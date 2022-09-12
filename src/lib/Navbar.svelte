<script lang="ts">
    import type { Writable } from "svelte/store";
    import DarkMode from "./DarkMode.svelte";

    export let position: number = 0;

    let darkMode: Writable<boolean>;
    let darkModeLocked: boolean = false;

    $: lockDarkMode($darkMode);

    function lockDarkMode(_: unknown) {
        darkModeLocked = true;
        setTimeout(() => darkModeLocked = false, 300);
    }

    let menu: boolean = false;

    const links: [string, string][] = [
        ["#about", "About"],
        ["#experience", "Experience"],
        ["#projects", "Projects"],
        ["#contact", "Contact"],
    ];
</script>

<DarkMode bind:darkMode />

<nav class="backdrop-blur-sm
            h-16 sm:h-14 px-4 py-2 sm:py-2 w-full z-10 fixed
            flex items-center justify-between">

    <img 
        draggable="false"
        class="w-12 sm:w-8 h-12 sm:h-8 rounded-lg cursor-pointer" 
        src="/kekontheworld.png" alt="Logo"
        on:click={() => menu = !menu}
    >
    <div class="wrapper flex items-center gap-2 sm:gap-4 md:gap-8">
        <div class="links">
            {#each links as [href, name], i}
                <a href={href} class:active={position === i} 
                    style="transition-delay: {i*80}ms" 
                    on:click={() => menu = false}>{name}</a>
            {/each}
        </div>
        <input type="checkbox" disabled={darkModeLocked} bind:checked={$darkMode}/>
    </div>
</nav>
<div class:menu class="mobile bg-white/20 dark:bg-black/20">
    {#each links as [href, name], i}
        <a href={href} class:active={position === i} 
            style="transition-delay: {i*80}ms" 
            on:click={() => menu = false}>{name}</a>
    {/each}
</div>

<style lang="postcss">
    .mobile {
        @apply sm:hidden flex fixed flex-col items-center z-10 top-0 left-0 
             backdrop-blur-lg h-screen px-6 w-full opacity-0
             duration-300 pointer-events-none py-20;
    }
    .mobile.menu {
        @apply transition-opacity pointer-events-auto opacity-100;
    }

    .mobile a {
        @apply font-medium flex items-center justify-center w-full h-full
             text-2xl opacity-0 translate-y-10 font-dela scale-125;
    }

    .mobile.menu a {
        @apply transition-[transform,opacity] transform-none opacity-100 duration-500;
    }
    .links a {
            @apply font-inter text-base block transition-none font-medium;
    }

    .links {
        @apply hidden pr-2 sm:flex gap-x-4 md:gap-x-8;
    }
</style>