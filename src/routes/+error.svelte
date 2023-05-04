<script>
	import FlyinText from "$lib/FlyinText.svelte";
	import { onMount } from "svelte";

	const descriptions = [
		"What is this place?",
		"'I ThInK i FoUnD a BuG'",
		"Where are you trying to go?",
		"I can't find this place. Weird..."
	];

	let description = descriptions[Math.floor(Math.random() * descriptions.length)];

	let active = false;
	onMount(() => (active = true));
</script>

<svelte:head>
	<title>KekOnTheWorld | Not found</title>
</svelte:head>

<main class:active>
	<h1><FlyinText text="404" flyin={active} delay={300} betweenDelay={200} /></h1>
	<p>{description} => <a href="/">Home</a></p>
</main>

<style lang="postcss">
	main {
		@apply flex flex-col items-center justify-center min-h-screen opacity-0;
	}

	main.active {
		@apply opacity-100 transition-opacity duration-1000;
	}

	h1 {
		@apply text-6xl mb-2;
	}

	p {
		@apply text-lg font-inter mb-4 opacity-0 translate-y-5;
	}

	main.active p {
		@apply opacity-100 translate-y-0 transition-[transform,opacity] duration-1000 delay-[800ms];
	}
</style>
