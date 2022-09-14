<script lang="ts">
	import { browser } from "$app/environment";

    export let time: Date;

    let _time = time.getTime();
    $: _time = time.getTime();

    let _since = Date.now() - _time;

    if(browser) {
        setInterval(() => _since = Date.now() - _time, 500);
    }

    $: data = get(_since);

    function get(num: number) {
        const seconds = Math.floor(num / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);
        return [seconds % 60, minutes % 60, hours % 24, days % 30, months % 12, years];
    }

    function extend(num: number, digits: number) {
        let _num = num.toFixed(0).toString();
        return ("0".repeat(Math.max(0, digits - _num.length))) + _num; 
    }
</script>

<span>
    {data[5]}y
    {data[4]}m
    {data[3]}d
    {extend(data[2], 2)}:{extend(data[1], 2)}:{extend(data[0], 2)}
</span>


<style lang="postcss">
    span {
        @apply rounded-lg bg-gray-800 text-white
               cursor-pointer select-none inline-flex
               transition-all duration-300 px-2;
    }
</style>