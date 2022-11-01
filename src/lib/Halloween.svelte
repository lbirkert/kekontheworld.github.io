<script>
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

    const material = new ShaderMaterial({
        uniforms: {
            time: { value: 1.0 },
            frame: { value: 1 }
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
</script>

<main class:mount>
    <Canvas size={{ width: -10, height: -10 }} flat>
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

    main > :global(canvas) {
        @apply w-screen h-screen;
    }

    main.mount {
        @apply opacity-100;
    }
</style>