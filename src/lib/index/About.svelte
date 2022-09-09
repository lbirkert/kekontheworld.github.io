<script lang="ts">
    import FlyinText from "$lib/FlyinText.svelte";

    export let mount: boolean;
</script>

<section 
    class="full flex items-center justify-center flex-col gap-5 px-5"
>
    <h1 class="text-4xl">
        <FlyinText text="KekOnTheWorld" flyin={mount} delay={300}/>
    </h1>
    <p class="font-[Inter] max-w-2xl text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sunt in natus odio
        quas, nemo ea? Facere quis aut delectus, pariatur libero suscipit quidem excepturi,
        quisquam consectetur magni numquam molestias.
    </p>
</section>
