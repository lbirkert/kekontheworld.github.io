<script lang="ts">
    import FlyinText from "$lib/FlyinText.svelte";

	import Timesince from "$lib/Timesince.svelte";

    import { faDiscord, faGithub, faGitlab, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

    import Fa from "svelte-fa";

    export let active: boolean;
</script>

<section class:active class="full">
    <h1>
        <FlyinText text="KekOnTheWorld" flyin={active} delay={300}/>
    </h1>
    <p>
        KekOnTheWorld is a student and developer who loves Opensource Software.
        He has been coding since <Timesince time={new Date("2020-1-8 9:15")}/> and is heavily <a href="#experience">experienced</a> in Front- and Backend development.
    </p>
    <div class="socials">
        <a href="https://discord.gg/Cq2UpzeTnm" target="_blank" rel="noreferrer" aria-label="Discord">
            <Fa icon={faDiscord}/>
        </a>
        <a href="https://github.com/KekOnTheWorld/" target="_blank" rel="noreferrer" aria-label="Github">
            <Fa icon={faGithub}/>
        </a>
        <a href="https://gitlab.com/KekOnTheWorld" target="_blank" rel="noreferrer" aria-label="Gitlab">
            <Fa icon={faGitlab}/>
        </a>
        <a href="https://twitter.com/KekOnTheWorld" target="_blank" rel="noreferrer" aria-label="Twitter">
            <Fa icon={faTwitter}/>
        </a>
        <a href="https://twitch.tv/KekOnTheWorld" target="_blank" rel="noreferrer" aria-label="Twitch">
            <Fa icon={faTwitch}/>
        </a>
        <a href="https://www.youtube.com/channel/UCn-EuwrJNTYtkBS-r_XudjA" target="_blank" rel="noreferrer" aria-label="Youtube">
            <Fa icon={faYoutube}/>
        </a>
    </div>
</section>

<style lang="postcss">
    section {
        @apply flex items-center justify-center flex-col gap-5 px-5;
    }

    section > h1 {
        @apply sm:text-4xl text-3xl;
    }

    section > p {
        @apply font-[Inter] max-w-2xl transition-[opacity,transform] 
            opacity-0 translate-y-10 scale-150 sm:text-lg text-base;
    }

    section.active > p {
        @apply delay-500 duration-1000 opacity-100 translate-y-0 scale-100;
    }

    .socials {
        --background: white;
        @apply flex sm:gap-5 gap-4 mt-2;
    }

    .socials a {
        @apply dark:text-white dark:hover:text-white/80 duration-300
              text-black hover:text-black/80 transition-colors 
              cursor-pointer text-3xl flex justify-center items-center;
    }

    .socials a {
        @apply transition-[transform,opacity] translate-y-5 opacity-0;
    }
    
    section.active .socials a {
        @apply duration-1000 opacity-100 translate-y-0;
    }

    section.active .socials a:nth-child(0) { @apply delay-[800ms] }
    section.active .socials a:nth-child(1) { @apply delay-[850ms] }
    section.active .socials a:nth-child(2) { @apply delay-[900ms] }
    section.active .socials a:nth-child(3) { @apply delay-[950ms] }
    section.active .socials a:nth-child(4) { @apply delay-[1000ms] }
    section.active .socials a:nth-child(5) { @apply delay-[1050ms] }
    section.active .socials a:nth-child(6) { @apply delay-[1100ms] }
</style>