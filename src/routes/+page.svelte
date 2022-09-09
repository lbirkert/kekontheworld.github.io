<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import About from "$lib/index/About.svelte";
    import Contact from "$lib/index/Contact.svelte";
    import Experience from "$lib/index/Experience.svelte";
    import Projects from "$lib/index/Projects.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import SnapScroll from "$lib/SnapScroll.svelte";
    import { onMount } from "svelte";

    let mount: boolean = false;

    onMount(() => {
        mount = true;
    });

    const sections = [
        "about", "experience",
        "projects", "contact"
    ];

    let innerHeight: number;
</script>

<svelte:window bind:innerHeight></svelte:window>

<div class="wrapper" class:mount>
    <Navbar/>
    <main class="h-screen">
        <SnapScroll {sections} height={innerHeight}>
            <About bind:mount/>
            <Experience bind:mount/>
            <Projects bind:mount/>
            <Contact bind:mount/>
        </SnapScroll>
    </main>
    <Footer/>
</div>

<style lang="postcss">
    .wrapper {
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    .wrapper.mount {
        opacity: 1;
    }
</style>

