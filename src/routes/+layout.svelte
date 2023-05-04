<script>
	import Shader from "$lib/Shader.svelte";

	import "@fontsource/dela-gothic-one/latin.css";
	import "@fontsource/inter/latin.css";
	import "../app.css";

	import vertexShader from "$lib/shaders/halloween.vert.js";
	import fragmentShader from "$lib/shaders/halloween.frag.js";
</script>

<svelte:head>
	<script>
		var prefered = localStorage.getItem("theme");
		var darkMode = prefered
			? prefered === "dark"
			: window.matchMedia("(prefers-color-scheme: dark)").matches;
		darkMode ? document.head.classList.add("dark") : document.head.classList.remove("dark");
	</script>
</svelte:head>

<div id="bg">
	<Shader {vertexShader} {fragmentShader} />
	<div />
</div>

<div id="root">
	<slot />
</div>

<style lang="postcss">
	#bg div {
		@apply fixed top-0 left-0 w-screen h-screen bg-white/90 -z-10 dark:bg-black/80;
	}
</style>
