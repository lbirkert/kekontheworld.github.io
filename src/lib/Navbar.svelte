<script lang="ts">
    import { darkMode } from "$lib/theme";

    export let position = 0;

    let darkModeLocked = false;

    $: lockDarkMode($darkMode);

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    function lockDarkMode(_: unknown) {
        darkModeLocked = true;
        setTimeout(() => darkModeLocked = false, 300);
    }

    let menu = false;

    const links: [string, string][] = [
        ["/#about", "About"],
        ["/#experience", "Experience"],
        ["/#projects", "Projects"],
        ["/#contact", "Contact"],
    ];
</script>

<nav>
    <button on:click={() => menu = !menu}>
        <img 
            draggable="false"
            class="w-12 sm:w-8 h-12 sm:h-8 rounded-lg cursor-pointer" 
            src="/logo.png" alt="Logo"
        >
    </button>
    <div class="wrapper flex items-center gap-2 sm:gap-4 md:gap-8">
        <div class="links">
            {#each links as [href, name], i}
                <a href={href} class:active={position === i} 
                    style="transition-delay: {i*80}ms" 
                    on:click={() => menu = false}>{name}</a>
            {/each}
        </div>
        <input aria-label="Change current theme to Light/Dark" id="theme-switcher" type="checkbox" disabled={darkModeLocked} bind:checked={$darkMode}/>
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
    nav {
        @apply max-w-6xl top-0 left-[50%] -translate-x-[50%] self-center
               h-16 sm:h-14 px-[max(1rem,4vw)] py-2 sm:py-2 w-full z-10 fixed
               flex items-center justify-between;
    }

    .mobile {
        @apply sm:hidden flex fixed flex-col items-center z-20 top-0 left-0 
             h-screen px-6 w-full backdrop-blur-lg opacity-0
             duration-300 pointer-events-none py-20;
    }
    .mobile.menu {
        @apply pointer-events-auto opacity-100;
        /* Transition temporarily removed because of performance concerns */
        /* @apply transition-opacity */
    }

    .mobile a {
        @apply font-medium flex items-center justify-center w-full h-full
             text-2xl opacity-0 font-dela translate-y-10 scale-125 will-change-transform;
    }

    .mobile.menu a {
        @apply transition-[transform,opacity] opacity-100 duration-700 translate-y-0;
    }
    .links a {
            @apply font-inter text-base block transition-none font-medium;
    }

    .links {
        @apply hidden pr-2 sm:flex gap-x-4 md:gap-x-8;
    }
</style>