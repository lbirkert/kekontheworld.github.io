<svelte:head>
    <script>
        var prefered = localStorage.getItem("theme");
        var darkMode = prefered ? prefered === "dark" :
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        darkMode ? document.head.classList.add("dark") : 
            document.head.classList.remove("dark");
    </script>
</svelte:head>