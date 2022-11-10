<script lang="ts">
	import { EXTERNAL_LICENSE_URL, LICENSES } from "./config";
	import type { Project } from "./types";


    export let project: Project;
</script>

{#if project}
<main>
    <div class="project">
        <h1>
            <a href="https://github.com/{project.repo}" target="_blank" rel="noreferrer">
                {project.title}
            </a>
            {#if project.archive}
                <div class="badge archive">Public archive</div>
            {:else}
                <div class="badge public">Public</div>
            {/if}
        </h1>
        {#if project.fork}
            <p class="fork">Forked from <a class="fork" href="https://github.com/{project.fork}" target="_blank" rel="noreferrer">
                {project.fork}
            </a></p>
        {/if}
        <p class="description">{project.description}</p>
        <footer>
            <p class="license"><a href="{EXTERNAL_LICENSE_URL}{project.license}">
                {LICENSES[project.license].name}
            </a></p>
            {#if project.demo}
            <div class="spacer"></div>
            <p class="demo"><a href={project.demo} target="_blank" rel="noreferrer">
                Demo
            </a></p>
            {/if}
        </footer>
    </div>
</main>
{/if}

<style lang="postcss">
    main .project {
        @apply w-screen max-w-md py-6 px-8 border-[2px] rounded-lg text-left
            border-white dark:border-black/20
            bg-white/30 dark:bg-black/30;
            /* bg-white/20 dark:bg-gray-900 border-black/5
            dark:border-white/5 */
    }

    .project > h1 { @apply font-inter mb-2 flex items-center gap-x-4; }
    .project > h1 a { @apply text-blue-500 dark:text-blue-400 hover:underline; }
    .project > h1 .badge { @apply border-[1px] font-inter text-sm px-1.5 rounded-xl font-light; }
    .project > h1 .badge.archive { @apply text-orange-700 border-orange-600 dark:border-orange-400 dark:text-orange-300; }
    .project > h1 .badge.public { @apply border-gray-600 text-gray-800 dark:border-gray-600 dark:text-gray-400; }

    .project .fork {
        @apply font-inter text-gray-600 dark:text-gray-400 whitespace-nowrap mb-2;
    }
    .project .fork a:hover { @apply  text-blue-500 dark:text-blue-400; }

    .project .description { @apply font-inter mb-2; }

    .project footer { @apply flex gap-x-2 items-center; }
    .project footer .spacer { @apply w-0.5 h-4 bg-gray-400 dark:bg-gray-500 rounded-lg; }
    .project .demo { @apply font-inter text-gray-600 dark:text-gray-400; }
    .project .demo a { @apply text-gray-600 dark:text-gray-400; }
    .project .demo a:hover { @apply text-blue-500 dark:text-blue-400; }
    .project .license { @apply font-inter text-gray-600 dark:text-gray-400; }
    .project .license a { @apply text-gray-600 dark:text-gray-400; }
    .project .license a:hover { @apply text-blue-500 dark:text-blue-400; }
</style>