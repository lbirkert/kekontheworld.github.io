<script lang="ts">
	import Halloween from "$lib/Halloween.svelte";
	import ThemePre from "$lib/ThemePre.svelte";

	import "@fontsource/dela-gothic-one/latin.css";
	import "@fontsource/inter/latin.css";
	import "../app.css";
</script>

<ThemePre/>


<div id="bg">
	<Halloween/>
	<div/>
</div>

<div id="root">
	<slot />
</div>

<style lang="postcss">
	#bg div {
		@apply backdrop-blur-md fixed top-0 left-0 w-screen h-screen bg-white/60 -z-10 dark:bg-black/60;
	}
</style>