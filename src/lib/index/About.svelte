<script lang="ts">
	import {
		DISCORD_URL,
		GITHUB_URL,
		GITLAB_URL,
		TWITCH_URL,
		TWITTER_URL,
		YOUTUBE_URL
	} from "$lib/config";
	import {
		faDiscord,
		faGithub,
		faGitlab,
		faTwitch,
		faTwitter,
		faYoutube
	} from "@fortawesome/free-brands-svg-icons";

	import FlyinText from "$lib/FlyinText.svelte";
	import Timesince from "$lib/Timesince.svelte";

	import Fa from "svelte-fa";

	export let active: boolean;
</script>

<svelte:head>
	{#if active}
		<title>KekOnTheWorld | About</title>
	{/if}
</svelte:head>

<section class:active class="full">
	<h1>
		<FlyinText text="KekOnTheWorld" flyin={active} delay={300} />
	</h1>
	<p>
		Lucas Birkert (aka. KekOnTheWorld) is a student and developer who loves Opensource Software. He
		has been coding for <Timesince time={new Date("2020-3-8 9:15")} /> and is heavily
		<a href="#experience">experienced</a> in Front- and Backend development.
	</p>
	<div class="socials">
		<a href={DISCORD_URL} target="_blank" rel="noreferrer" title="Discord">
			<Fa icon={faDiscord} />
		</a>
		<a href={GITHUB_URL} target="_blank" rel="noreferrer" title="Github">
			<Fa icon={faGithub} />
		</a>
		<a href={GITLAB_URL} target="_blank" rel="noreferrer" title="Gitlab">
			<Fa icon={faGitlab} />
		</a>
		<a href={TWITTER_URL} target="_blank" rel="noreferrer" title="Twitter">
			<Fa icon={faTwitter} />
		</a>
		<a href={TWITCH_URL} target="_blank" rel="noreferrer" title="Twitch">
			<Fa icon={faTwitch} />
		</a>
		<a href={YOUTUBE_URL} target="_blank" rel="noreferrer" title="Youtube">
			<Fa icon={faYoutube} />
		</a>
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex items-center justify-center flex-col gap-7 px-5 relative;
	}

	section > h1 {
		@apply sm:text-4xl text-3xl;
	}

	section > p {
		@apply font-inter max-w-2xl transition-[opacity,transform] 
            opacity-0 translate-y-10 scale-150 sm:text-lg text-base transform-gpu;
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
		@apply transition-[transform,opacity] translate-y-5 opacity-0 transform-gpu;
	}

	section.active .socials a {
		@apply duration-1000 opacity-100 translate-y-0;
	}

	section.active .socials a:nth-child(0) {
		@apply delay-[800ms];
	}
	section.active .socials a:nth-child(1) {
		@apply delay-[850ms];
	}
	section.active .socials a:nth-child(2) {
		@apply delay-[900ms];
	}
	section.active .socials a:nth-child(3) {
		@apply delay-[950ms];
	}
	section.active .socials a:nth-child(4) {
		@apply delay-[1000ms];
	}
	section.active .socials a:nth-child(5) {
		@apply delay-[1050ms];
	}
	section.active .socials a:nth-child(6) {
		@apply delay-[1100ms];
	}
</style>
