<script lang="ts">
    import { browser } from '$app/environment';

	import { Canvas, Camera, Mesh, Scene } from "svelte-ogl";
    import { Program, Plane } from "ogl";

    export let fragmentShader: string;
    export let vertexShader: string;

    const uniforms = { time: { value: 0 }, resolution: { value: [0, 0] } };

    let mount = browser;
</script>

<main class:mount>
    <Canvas
        on:render={(e) => {
            const size = e.detail.size;
            uniforms.resolution.value = [ size.width, size.height ];
            uniforms.time.value = e.detail.time / 1000
        }}
        dpr={0.15}
    >
        <Camera />
        
        <Scene>
            <Mesh
                program={(gl) =>
                    new Program(gl, {
                        vertex: vertexShader,
                        fragment: fragmentShader,
                        uniforms
                    })}
                geometry={(gl) =>
                    new Plane(gl, {
                        width: 2,
                        height: 2
                    })}
            />
        </Scene>
    </Canvas>
</main>

<style>
    main {
        @apply w-screen h-screen fixed top-0 left-0 transition-opacity duration-1000 opacity-0 -z-10;
    }

    main.mount {
        @apply opacity-100;
    }
</style>
