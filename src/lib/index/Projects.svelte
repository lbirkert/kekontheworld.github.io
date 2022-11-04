<script lang="ts">
    export let active: boolean;
</script>

<section class="full" class:active>
    <h1>
        Projects
    </h1>
    <p>
        Here you can find a list of things i am working on and have worked on in the past
    </p>

    <div class="projects">
        
    </div>
</section>

<style lang="postcss">
    section {
        @apply flex items-center justify-center flex-col gap-7 px-5;
    }

    section > h1, section > p {
        @apply transition-[transform,opacity] transform-gpu opacity-0;
    }

    section > h1 {
        @apply sm:text-4xl text-3xl -translate-x-20;
    }

    section > p {
        @apply font-inter max-w-md sm:text-lg text-base translate-x-20;
    }
    section.active > h1, section.active > p {
        @apply delay-300 duration-1000 translate-x-0 opacity-100;
    }
</style>