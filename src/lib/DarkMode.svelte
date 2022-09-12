<script lang="ts">
    import { onMount } from "svelte";

    import { writable } from "svelte/store";

    export let darkMode = writable(false);
    export let prefered = writable("system");

    let system: MediaQueryList;
    let systemMatches: boolean;

    $: if($prefered === "system") $darkMode = systemMatches;

    onMount(() => {
        $prefered = localStorage.getItem("theme") || "system";

        prefered.subscribe(p => {
            if(p === "system") {
                localStorage.removeItem("theme");
                if(!system) system = window.matchMedia("(prefers-color-scheme: dark)");
                system.onchange = (e) => systemMatches = e.matches;
                systemMatches = system.matches;

            } else {
                localStorage.setItem("theme", p);
                $darkMode = p === "dark";
            }
        });

        darkMode.subscribe(d => {
            if(d !== undefined && (
                $prefered === "system" && system !== undefined && systemMatches !== d ||
                $prefered !== "system" && d !== ($prefered === "dark")
            )) {
                $prefered = d ? "dark" : "light";
            }

            console.log("THEME UPDATE");

            d ? document.head.classList.add("dark") : 
                document.head.classList.remove("dark");
        });
    })
</script>