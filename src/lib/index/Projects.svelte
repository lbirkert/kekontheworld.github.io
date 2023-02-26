<script lang="ts">
	import { browser } from "$app/environment";
	import { PROJECTS } from "$lib/config";
	import Project from "$lib/Project.svelte";

	export let active: boolean;

	let projects = PROJECTS;

	let projectIdx = Math.floor(Math.random() * projects.length);

	function move(i: number) {
		projectIdx = i % projects.length;

		timer();
	}

	let intv: number;
	function timer() {
		if (intv) clearTimeout(intv);
		intv = window.setTimeout(() => move(projectIdx + 1), 5000);
	}

	if (browser) timer();
</script>

<svelte:head>
	{#if active}
		<title>KekOnTheWorld | Projects</title>
	{/if}
</svelte:head>

<section class="full" class:active>
	<h1>Projects</h1>
	<p>Here you can find a list of things i am working on and have worked on in the past</p>

	<div class="projects">
		<ul style:transform="translateX(calc({projectIdx} * -448px))">
			{#each projects as project, i}
				<li class:active={projectIdx === i}><Project {project} /></li>
			{/each}
		</ul>
	</div>
	<div class="bar">
		{#each new Array(projects.length).fill(0) as _, i}
			<button
				aria-label="Switch to project {i}"
				on:click={() => move(i)}
				class:active={projectIdx === i}
			/>
		{/each}
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex items-center justify-center flex-col gap-7 px-5 w-screen;
	}

	section > h1,
	section > p {
		@apply transition-[transform,opacity] transform-gpu opacity-0;
	}

	section > h1 {
		@apply sm:text-4xl text-3xl -translate-x-20;
	}

	section > p {
		@apply font-inter max-w-md sm:text-lg text-base translate-x-20;
	}
	section.active > h1,
	section.active > p {
		@apply delay-300 duration-1000 translate-x-0 opacity-100;
	}

	.bar {
		@apply flex sm:gap-x-2 gap-x-1 opacity-0 translate-x-64;
	}

	.bar button {
		@apply w-3 h-3 mx-0.5 bg-black dark:bg-white rounded-3xl opacity-20
            transition-[opacity,transform] duration-1000
            cursor-pointer;
	}
	.bar button.active {
		@apply scale-125 opacity-80;
	}

	section.active .projects,
	section.active .bar {
		@apply transition-[opacity,transform] duration-1000 opacity-100 translate-x-0 delay-300;
	}

	.projects {
		@apply relative h-48 w-screen max-w-[448px] opacity-0 -translate-x-64;
	}

	.projects ul {
		@apply absolute flex items-center h-48;
	}

	section.active .projects ul {
		@apply transition-transform duration-1000;
	}

	.projects li {
		@apply w-[448px] scale-50 opacity-0 transition-[opacity,transform] duration-1000;
	}

	.projects li.active {
		@apply scale-100 opacity-100;
	}
</style>
