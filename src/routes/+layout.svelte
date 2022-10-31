<script lang="ts">
	import { browser } from "$app/environment";
	import Halloween from "$lib/Halloween.svelte";
	import ThemePre from "$lib/ThemePre.svelte";

	import "@fontsource/dela-gothic-one/latin.css";
	import "@fontsource/inter/latin.css";
	import "../app.css";

	let mount = false;

    if(browser) mount = true;
</script>

<ThemePre/>

<div id="bg" class:mount>
	<Halloween/>
</div>

<div id="root">
	<slot />
</div>

<style lang="postcss">
	#root {
		@apply bg-white/40;
	}

	:global(head.dark ~ body) #root {
		@apply bg-black/40;
	}

	#bg {
        @apply transition-opacity duration-1000 opacity-0;
    }

    #bg.mount {
        opacity: 1;
    }
</style>
