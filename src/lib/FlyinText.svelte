<script lang="ts">
    export let text: string;
    export let betweenDelay: number = 50;
    export let delay: number = 0;
    export let flyin: boolean = true;

    $: letters = text.split("");
</script>

{#each letters as l, i}
    <span class:flyin style="animation-delay: {delay + i * betweenDelay}ms">{l}</span>
{/each}

<style lang="postcss">
    span {
        display: inline-block;
        opacity: 0;
    }

    span.flyin {
        animation: 0.3s flyin ease forwards;
    }

    @keyframes flyin {
        from { 
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>