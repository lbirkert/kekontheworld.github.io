<script lang="ts">
    import { page } from "$app/stores";

    $: current = $page.url.pathname;
</script>

<nav class="bg-white 
            dark:bg-black/50 dark:backdrop-blur-lg
            h-14 px-4 py-2 w-full z-10 fixed
            flex items-center justify-between">
    <img 
        draggable="false"
        class="w-10 h-10 rounded-lg cursor-pointer" 
        src="/kekontheworld.png" alt="Logo"
    >
    <div class="links flex gap-4">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </div>
</nav>

<style lang="postcss">
    .links a {
        @apply font-[Inter] text-base font-medium hover:text-black/75;
    }
</style>