<script lang="ts">
    export let position: number = 0;
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
    <div class="links flex gap-2 sm:gap-4 md:gap-8 lg:gap-16">
        <a href="#about" class:active={position === 0}>About</a>
        <a href="#experience" class:active={position === 1}>Experience</a>
        <a href="#projects" class:active={position === 2}>Projects</a>
        <a href="#contact" class:active={position === 3}>Contact</a>
    </div>
</nav>

<style lang="postcss">
    .links a {
        @apply font-[Inter] text-base font-medium hover:text-black/75 transition-colors;
    }

    .links a.active {
        @apply text-orange-800;
    }
</style>