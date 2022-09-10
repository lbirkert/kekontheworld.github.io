<script lang="ts">
import { onMount } from "svelte";

    import { writable } from "svelte/store";

    export let position: number = 0;

    let darkMode = writable(false);
    let darkModeLocked: boolean = false;

    $: lockDarkMode($darkMode);

    $: console.log($darkMode);

    function lockDarkMode(_: unknown) {
        darkModeLocked = true;
        setTimeout(() => darkModeLocked = false, 300);
    }

    onMount(() => {
        darkMode.subscribe(d => d ? document.body.classList.add("dark") : 
            document.body.classList.remove("dark"));
    });

</script>

<nav class="backdrop-blur-sm
            h-14 px-4 py-3 w-full z-10 fixed
            flex items-center justify-between">

    <img 
        draggable="false"
        class="w-8 h-8 rounded-lg cursor-pointer" 
        src="/kekontheworld.png" alt="Logo"
    >
    <div class="wrapper flex items-center gap-2 sm:gap-4 md:gap-8">
        <div class="links hidden sm:flex items-center gap-2 sm:gap-4 md:gap-8">
            <a href="#about" class:active={position === 0}>About</a>
            <a href="#experience" class:active={position === 1}>Experience</a>
            <a href="#projects" class:active={position === 2}>Projects</a>
            <a href="#contact" class:active={position === 3}>Contact</a>
        </div>
        <input type="checkbox" disabled={darkModeLocked} bind:checked={$darkMode}/>
    </div>
</nav>

<style lang="postcss">
    .links a {
        @apply font-inter text-base font-medium hover:text-black/75 dark:hover:text-white/75 transition-colors;
    }
</style>