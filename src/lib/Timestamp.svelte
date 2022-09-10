<script lang="ts">
    import _timezones, { type Timezone } from "timezones.json";

    export let time: Date;
    export let offset: number = 0;

    $: _time = new Date(time.getTime() + 
        time.getTimezoneOffset() * 60 * 1000 + 
        offset * 60 * 60 * 1000); // Convert Timezone

    export let menu: boolean = false;

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
        return ((_query.startsWith("UTC") && 
            _query.slice(3) === timezone.offset.toString() || 
            _query === timezone.offset.toString()) ? 10 : 0) +
            (clean(timezone.abbr).startsWith(_query) ? 3 : 0) +
            (clean(timezone.value).includes(_query) ? 2 : 0) + 
            (clean(timezone.text).includes(_query) ? 3 : 0) + 
            timezone.utc.reduce((p, v) => p + (clean(v).includes(_query) ? 1 : 0), 0);
    }

    function clean(text: string): string {
        return text.replace(/(?![a-zA-Z0-9-])./g, "");
    }

    let root: HTMLSpanElement;
    const onWindowClick = function(e) {
        let target: ParentNode | null = e.target as HTMLElement;
        while(target && target !== root)
            target = target.parentNode;
        if(!target) menu = false;
    } as svelte.JSX.MouseEventHandler<Window>;

    function extend(num: number, digits: number) {
        let _num = num.toString();
        return ("0".repeat(Math.max(0, digits - _num.length))) + _num; 
    }
</script>

<svelte:window on:click={onWindowClick}></svelte:window>

<span class="" class:menu bind:this={root}>
    <div class="px-2" on:click={toggle}>
        {extend(_time.getMonth() + 1, 2)}/{extend(_time.getDate(), 2)}/{_time.getFullYear()}
        {extend(_time.getHours(), 2)}:{extend(_time.getMinutes(), 2)}
    </div>
    <menu>
        <input type="text" placeholder="Timezone" bind:value={timezoneSearch}>
        <div class="zones">
            {#each timezones as timezone, i}
                <div class="zone" on:click={(e) => {
                    offset = timezone.offset;
                }}>
                    <p>{timezone.value}</p>
                    <p>UTC{timezone.offset < 0 ? "" : "+"}{timezone.offset}</p>
                </div>
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

    span.menu {
        @apply rounded-t-none;
    }

    menu {
        @apply opacity-0 absolute bg-gray-800 text-white
               -translate-y-full px-4 py-4 transition-opacity
               duration-300 rounded-lg rounded-bl-none
               flex flex-col items-start;
    }

    span.menu > menu {
        @apply opacity-100;
    }

    menu > input {
        @apply text-lg font-medium;
    }

    .zones {
        @apply flex flex-col w-full;
    }

    .zones p {
        @apply text-white text-base;
    }

    .zone {
        @apply flex justify-between cursor-pointer;
    }
</style>