<script lang="ts">
	import FlyinText from "$lib/FlyinText.svelte";

    export let active: boolean;
</script>

<section class="full" class:active>
    <h1>
        <FlyinText text="Experience" flyin={active} delay={300} />
    </h1>
</section>

<style lang="postcss">
    section {
        @apply flex items-center justify-center flex-col gap-5 px-5;
    }

    section > h1 {
        @apply sm:text-4xl text-3xl;
    }
</style>