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
</div>

<div id="root">
	<slot />
</div>

<style lang="postcss">
	#root {
        @apply bg-white/50;
    }

	:global(head.dark ~ body) #root {
		@apply bg-black/40;
	}
</style>
