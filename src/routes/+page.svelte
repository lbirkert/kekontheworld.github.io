<script lang="ts">
	import type { Writable } from "svelte/store";

	import Footer from "$lib/Footer.svelte";
	import About from "$lib/index/About.svelte";
	import Contact from "$lib/index/Contact.svelte";
	import Experience from "$lib/index/Experience.svelte";
	import Projects from "$lib/index/Projects.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import SnapScroll from "$lib/SnapScroll.svelte";
	import { browser } from "$app/environment";

	let mount = browser;

	const sections = ["about", "experience", "projects", "contact"];

	let position: Writable<number>;
	let active: { [key: number]: boolean } = {};
</script>

<svelte:head>
	<title>KekOnTheWorld</title>
</svelte:head>

{#each sections as section}<div id={section} />{/each}

<div class="wrapper" class:mount>
	<Navbar bind:position={$position} />
	<main class="h-screen">
		<SnapScroll {sections} bind:position bind:active>
			<About active={mount && active[0]} />
			<Experience active={mount && active[1]} />
			<Projects active={mount && active[2]} />
			<Contact active={mount && active[3]} />
		</SnapScroll>
	</main>
	<Footer />
</div>
<p>This is my old portofolio. <a href="https://lbirkert.com">Checkout my new one</a></p>

<style lang="postcss">
	.wrapper {
		@apply transition-opacity duration-1000 opacity-0;
	}

	.wrapper.mount {
		opacity: 1;
	}

	p {
		position: fixed;
		left: 0;
		bottom: 0;
		text-align: left;
		font-family: "Inter", sans-serif;
	}

	a {
		color: #7373ff;
	}
</style>
