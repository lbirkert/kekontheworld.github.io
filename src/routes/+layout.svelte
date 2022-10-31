<script lang="ts">
	import Halloween from "$lib/Halloween.svelte";
	import ThemePre from "$lib/ThemePre.svelte";

	import "@fontsource/dela-gothic-one/latin.css";
	import "@fontsource/inter/latin.css";
	import "../app.css";
</script>

<ThemePre/>


<div id="root">
	<div id="bg">
		<Halloween/>
	</div>
	<slot />
</div>

<style lang="postcss">
	#bg {
        @apply bg-white/40 w-screen h-screen absolute;
    }

	:global(head.dark ~ body) #bg {
		@apply bg-black/40;
	}
</style>
