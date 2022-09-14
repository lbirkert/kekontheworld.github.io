<script lang="ts">
    import FlyinText from "$lib/FlyinText.svelte";

    import Discord from "$lib/icons/Discord.svelte";
    import Github from "$lib/icons/Github.svelte";
    import Twitter from "$lib/icons/Twitter.svelte";
    import Youtube from "$lib/icons/Youtube.svelte";
    import Twitch from "$lib/icons/Twitch.svelte";
    import Gitlab from "$lib/icons/Gitlab.svelte";
	import Timesince from "$lib/Timesince.svelte";

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
        He has been coding since <Timesince time={new Date("2020-1-8 9:15")}/> and is heavily <a href="#experience">experienced</a> in Front- and Backend development.
    </p>
    <!-- Todo: Add socials -->
    <div class="socials">
        <a href="https://discord.gg/Cq2UpzeTnm" target="_blank">
            <Discord/>
        </a>
        <a href="https://github.com/KekOnTheWorld/" target="_blank">
            <Github/>
        </a>
        <a href="https://gitlab.com/KekOnTheWorld" target="_blank">
            <Gitlab/>
        </a>
        <a href="https://twitter.com/KekOnTheWorld" target="_blank">
            <Twitter/>
        </a>
        <a href="https://twitch.tv/KekOnTheWorld">
            <Twitch/>
        </a>
        <a href="https://www.youtube.com/channel/UCn-EuwrJNTYtkBS-r_XudjA" target="_blank">
            <Youtube/>
        </a>
    </div>
</section>

<style lang="postcss">
    section > p {
        @apply transition-[opacity,transform] opacity-0 translate-y-10 scale-150;
    }

    section.active > p {
        @apply delay-500 duration-1000 opacity-100 translate-y-0 scale-100;
    }

    .socials {
        --background: white;
        @apply flex gap-x-4 mt-2;
    }

    .socials a {
        @apply dark:text-white dark:hover:text-white/80
              text-black hover:text-black/80 transition-colors duration-100;
    }

    .socials :global(svg) {
        @apply w-8 h-8 cursor-pointer;
    }

    :global(head.dark ~ body) .socials {
        --background: black;
    }
</style>