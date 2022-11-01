<script lang="ts">
    import { ShaderMaterial, PlaneGeometry } from 'three'
    import {
        AmbientLight,
        Canvas,
        DirectionalLight,
        Mesh,
        OrthographicCamera
    } from '@threlte/core'

	import { browser } from '$app/environment';

    import vertexShader from "$lib/shaders/halloween.vert.js";
    import fragmentShader from "$lib/shaders/halloween.frag.js";
	import type { WithTarget } from 'src/app';
	import { darkMode } from './theme';

    const material = new ShaderMaterial({
        uniforms: {
            time: { value: 1.0 },
            frame: { value: 1 },
            point: { value: [0.5, 0.5 ]},
            dim: { value: [ 0, 0 ]},
            dark: { value: false }
        },
        fragmentShader: fragmentShader,
        vertexShader: vertexShader
    });
    
    function animate() {
        requestAnimationFrame( animate );

        let time = performance.now() / 1000;

        material.uniforms.time.value = time;
        material.uniforms.frame.value += 1;
    }

    let mount = browser;

    if(mount) animate();

    let innerWidth: number = 0, innerHeight: number = 0;
    
    function mousemove(e: WithTarget<MouseEvent, Window>) {
        const { clientX, clientY } = e;
        material.uniforms.point.value = [clientX, innerHeight - clientY];
    }
    
    $: material.uniforms.dim.value = [ innerWidth, innerHeight ];
    $: material.uniforms.dark.value = $darkMode;
</script>

<svelte:window on:mousemove={mousemove} bind:innerHeight bind:innerWidth />

<main class:mount>
    <Canvas dpr={0.15} flat>
        <OrthographicCamera position={{ x: 0, y: 0, z: 1 }}/>

        <DirectionalLight shadow position={{ x: 3, y: 10, z: 10 }} />
        <DirectionalLight position={{ x: -3, y: 10, z: -10 }} intensity={0.2} />
        <AmbientLight intensity={0.2} />

        <!-- Cube -->
        <Mesh
            position={{ x: 0, y: 0, z: 0 }}
            geometry={new PlaneGeometry(2, 2, 2)}
            material={material}
        />
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