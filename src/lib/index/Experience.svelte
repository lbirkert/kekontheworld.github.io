<script lang="ts">
	import { EXPERIENCE_LANGS } from "$lib/config";
	import Fa from "svelte-fa";

	export let active: boolean;
</script>

<svelte:head>
	{#if active}
		<title>KekOnTheWorld | Experience</title>
	{/if}
</svelte:head>

<section class="full" class:active>
	<h1>Experience</h1>
	<p>
		I <span>❤</span> Webdevelopment, but also have great interesst in performant and efficient Software.
	</p>
	<ul class="langs">
		{#each EXPERIENCE_LANGS as lang, i}
			<li class="bar" style="transition-delay: {active ? i * 400 + 300 : 0}ms">
				<p class="name">
					{#if typeof lang.icon === "string"}
						{@html lang.icon}
					{:else}
						<Fa icon={lang.icon} />
					{/if}
					{lang.name}
				</p>
				<div
					style="width: {active ? lang.perc : 0}; transition-delay: {active ? i * 400 + 500 : 0}ms"
				>
					<p class="name">
						{#if typeof lang.icon === "string"}
							{@html lang.icon}
						{:else}
							<Fa icon={lang.icon} />
						{/if}
						{lang.name}
					</p>
					<p class="perc">{lang.perc}</p>
				</div>
				<p class="perc">{lang.perc}</p>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	section {
		@apply flex items-center justify-center flex-col gap-7 px-5;
	}

	section > h1,
	section > p {
		@apply transition-[transform,opacity] transform-gpu opacity-0;
	}

	section > h1 {
		@apply sm:text-4xl text-3xl translate-x-20;
	}

	section > p {
		@apply font-inter max-w-md sm:text-lg text-base -translate-x-20;
	}

	section > p span {
		@apply text-blue-600 dark:text-orange-500;
	}

	section.active > h1,
	section.active > p {
		@apply delay-300 duration-1000 translate-x-0 opacity-100;
	}

	.langs {
		@apply flex flex-col font-inter w-full max-w-xl gap-y-3;
	}

	section .bar {
		@apply flex items-center relative rounded-lg transform-gpu
            opacity-0 transition-[opacity,transform] translate-x-20
			dark:bg-black/40 bg-white/20 border-[1px] border-white drop-shadow-md
			dark:border-white/20;
	}
	section.active .bar {
		@apply opacity-100 duration-1000 translate-x-0;
	}
	.bar p {
		@apply font-inter absolute font-bold flex items-center gap-x-2 whitespace-nowrap;
	}

	.bar div {
		@apply h-7 rounded-md overflow-clip relative z-10 transition-[width]
            dark:bg-orange-500 bg-blue-600 flex items-center;
	}

	section.active .bar div {
		@apply duration-[2s];
	}

	.bar div > p {
		@apply dark:text-black text-white;
	}

	:root {
		--bar-width: min(calc(100vw - 85px), 531px);
	}

	.bar div > .perc {
		@apply left-0;
		transform: translateX(var(--bar-width));
	}
	.bar div > .name {
		@apply left-2;
	}

	.bar p {
		@apply dark:text-white text-black;
	}

	.bar > .perc {
		@apply right-2;
	}
	.bar > .name {
		@apply left-2;
	}
</style>
