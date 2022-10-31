<script lang="ts">
	import type { WithTarget } from "src/app";
    import _timezones, { type Timezone } from "timezones.json";

    export let time: Date;
    export let offset = 0;

    $: _time = new Date(time.getTime() + 
        time.getTimezoneOffset() * 60 * 1000 + 
        offset * 60 * 60 * 1000); // Convert Timezone

    export let menu = false;

    function toggle() {
        menu = !menu;
    }

    let timezones: Timezone[] = _timezones.slice(0, 5);

    let timezoneSearch: string;

    $: {
        if(timezoneSearch) {
            let tmp: [number, Timezone][] = _timezones
                .map(t => [score(t, timezoneSearch), t]);
            let sorted = tmp.filter(([a]) => a > 0).sort(([a], [b]) => b - a);
            timezones = sorted.slice(0, 5).map(([,t])=>t);
        }
    };

    function score(timezone: Timezone, query: string): number {
        let _query = clean(query);
        return ((_query.startsWith("utc") && 
            _query.slice(3) === clean(timezone.offset.toString()) || 
            _query === clean(timezone.offset.toString())) ? 10 : 0) +
            (clean(timezone.abbr).startsWith(_query) ? 3 : 0) +
            (clean(timezone.value).includes(_query) ? 2 : 0) + 
            (clean(timezone.text).includes(_query) ? 3 : 0) + 
            timezone.utc.reduce((p, v) => p + (clean(v).includes(_query) ? 1 : 0), 0);
    }

    function clean(text: string): string {
        return text.replace(/(?![a-zA-Z0-9-])./g, "").toLowerCase();
    }

    let root: HTMLSpanElement;
    function onWindowClick(e: WithTarget<MouseEvent, Window>) {
        let target: HTMLElement | null = e.target as HTMLElement;
        while(target && target !== root)
            target = target.parentNode as HTMLElement;
        if(!target) menu = false;
    };

    function extend(num: number, digits: number) {
        let _num = num.toString();
        return ("0".repeat(Math.max(0, digits - _num.length))) + _num; 
    }
</script>

<svelte:window on:click={onWindowClick}></svelte:window>

<span class:menu bind:this={root}>
    <button on:click={toggle} class="px-2">
        {extend(_time.getMonth() + 1, 2)}/{extend(_time.getDate(), 2)}/{_time.getFullYear()}
        {extend(_time.getHours(), 2)}:{extend(_time.getMinutes(), 2)}
    </button>
    <menu>
        <input type="text" placeholder="Timezone" bind:value={timezoneSearch}>
        <div class="zones">
            {#each timezones as timezone}
            <button class="zone" on:click={() => {
                offset = timezone.offset;
                menu = false;
            }} class:active={timezone.offset === offset}>
                <p>{timezone.value}</p>
                <p>UTC{timezone.offset < 0 ? "" : "+"}{timezone.offset}</p>
            </button>
            {/each}
        </div>
    </menu>
</span>


<style lang="postcss">
    span {
        @apply rounded-lg bg-gray-800 text-white
               cursor-pointer select-none inline-flex
               transition-all duration-300;
    }

    menu {
        @apply opacity-0 absolute bg-gray-800 text-white
               top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 py-4 transition-[opacity,transform]
               duration-300 rounded-lg
               flex flex-col items-start pointer-events-none scale-0;
    }

    span.menu > menu {
        @apply opacity-100 pointer-events-auto scale-100;
    }

    menu > input {
        @apply text-lg font-medium mb-2;
    }

    .zones {
        @apply flex flex-col w-full;
    }

    .zone {
        @apply flex justify-between cursor-pointer;
    }

    .zone p {
        @apply text-base transition-colors duration-100 text-white;
    }

    .zone:hover p {
        @apply text-gray-300;
    }

     .zone.active p {
        @apply text-blue-300;
    }
   
    .zone.active:hover p {
        @apply text-blue-400;
    }
</style>