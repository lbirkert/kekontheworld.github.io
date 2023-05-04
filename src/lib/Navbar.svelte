<script lang="ts">
	import { darkMode } from "$lib/theme";

	import { browser } from "$app/environment";

	export let position = 0;

	let darkModeLocked = false;

	$: lockDarkMode($darkMode);

	/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
	function lockDarkMode(_: unknown) {
		darkModeLocked = true;
		setTimeout(() => (darkModeLocked = false), 300);
	}

	let menu = false;

	const links: [string, string][] = [
		["/#about", "About"],
		["/#experience", "Experience"],
		["/#projects", "Projects"],
		["/#contact", "Contact"]
	];

	let scroll: boolean;
	$: if (browser) scroll = document.body.classList.contains("scroll") || position != 0;
</script>

<nav class:fixed={scroll} class="">
	<button on:click={() => (menu = !menu)}>
		<img draggable="false" src="/logo.png" alt="Logo" />
		<h1>KOTW</h1>
	</button>
	<h1>KOTW</h1>
	<div class="wrapper">
		<div class="links">
			{#each links as [href, name], i}
				<a
					{href}
					class:active={position === i}
					style="transition-delay: {i * 80}ms"
					on:click={() => (menu = false)}>{name}</a
				>
			{/each}
		</div>
		<input
			aria-label="Change current theme to Light/Dark"
			id="theme-switcher"
			type="checkbox"
			disabled={darkModeLocked}
			bind:checked={$darkMode}
		/>
	</div>
</nav>
<div class:menu class="mobile">
	{#each links as [href, name], i}
		<a
			{href}
			class:active={position === i}
			style="transition-delay: {i * 80}ms"
			on:click={() => (menu = false)}>{name}</a
		>
	{/each}
</div>

<style lang="postcss">
	nav {
		@apply max-w-5xl top-0 left-[50%] -translate-x-[50%] self-center
               px-[max(1rem,4vw)] py-3 sm:py-5 w-full z-10 fixed
               flex items-center justify-between lg:rounded-lg;
	}

	nav.fixed {
		@apply bg-white/5 border-b-[1px] drop-shadow-md border-white backdrop-blur-lg;
	}

	:global(head.dark ~ body) nav.fixed {
		@apply bg-black/40 border-white/20;
	}

	nav > button > img {
		@apply w-12 sm:w-8 h-12 sm:h-8 rounded-lg cursor-pointer;
	}

	button {
		@apply flex gap-x-5 md:gap-x-5 items-center;
	}

	button h1 {
		@apply text-2xl md:text-xl hidden sm:block;
	}

	nav > h1 {
		@apply block sm:hidden text-2xl;
	}

	.wrapper {
		@apply flex items-center gap-2 sm:gap-4 md:gap-8;
	}

	.mobile {
		@apply sm:hidden flex fixed flex-col items-center z-20 top-0 left-0 
             h-screen px-6 w-full backdrop-blur-lg opacity-0
            duration-300 pointer-events-none py-20 bg-white/20;
	}

	:global(head.dark ~ body) .mobile {
		@apply bg-black/30;
	}

	.mobile.menu {
		@apply pointer-events-auto opacity-100;
	}

	.mobile a {
		@apply font-medium flex items-center justify-center w-full h-full
             text-2xl opacity-0 font-dela translate-y-10 scale-125 will-change-transform;
	}

	.mobile.menu a {
		@apply transition-[transform,opacity] opacity-100 duration-700 translate-y-0;
	}
	.links a {
		@apply font-inter text-base block transition-none font-medium;
	}

	.links {
		@apply hidden pr-2 sm:flex gap-x-4 md:gap-x-8;
	}
</style>
