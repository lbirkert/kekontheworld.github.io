<script lang="ts">
    import FlyinText from "$lib/FlyinText.svelte";
    import Timestamp from "$lib/Timestamp.svelte";

    export let active: boolean;
</script>

<section 
    class="full flex items-center justify-center flex-col gap-5 px-5"
    class:active={active}
>
    <h1 class="sm:text-4xl text-3xl">
        <FlyinText text="KekOnTheWorld" flyin={active} delay={300}/>
    </h1>
    <p class="font-[Inter] max-w-2xl sm:text-lg text-base">
        KekOnTheWorld is a student and developer who loves Opensource Software.
        He has been coding since <Timestamp time={new Date("2020-1-8 9:15")}/> and is heavily <a href="#experience">experienced</a> in Front- and Backend development.
    </p>
    <!-- Todo: Add socials -->
</section>

<style lang="postcss">
    section > p {
        @apply transition-[opacity,transform] opacity-0 translate-y-10 scale-150;
    }

    section.active > p {
        @apply delay-500 duration-1000 opacity-100 translate-y-0 scale-100;
    }
</style>