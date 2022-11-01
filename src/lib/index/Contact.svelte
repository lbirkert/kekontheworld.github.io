<script lang="ts">
	import { DISCORD_URL } from "$lib/config";
	import { faDiscord } from "@fortawesome/free-brands-svg-icons";
	import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

    export let active: boolean;
</script>

<section class="full" class:active>
    <h1>Contact</h1>
    <p>You can contact me at following providers. I will try to respond as fast as i can. I promise</p>
    <div class="links">
        <a href={DISCORD_URL}>
            <Fa icon={faDiscord}/> Discord
        </a>
        <a href={DISCORD_URL}>
            <Fa icon={faMailBulk}/> Email
        </a>
    </div>
</section>

<style lang="postcss">
    section {
        @apply flex items-center justify-center flex-col gap-7 px-5;
    }

    section > h1 {
        @apply sm:text-4xl text-3xl;
    }

    section > p {
        @apply font-inter max-w-md sm:text-lg text-base;
    }

    .links {
        @apply flex gap-x-2 flex-wrap;
    }

    .links a {
        @apply flex items-center gap-x-2 font-inter tracking-wider font-semibold
            border-white dark:border-black/80 border-[1px] rounded-lg px-3 py-1.5 
            bg-white/30 dark:bg-black/30;
    }
</style>