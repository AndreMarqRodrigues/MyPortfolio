<template>
    <canvas id="bg"></canvas>
</template>

<script>
import * as THREE from 'three';

export default {
    mounted() {
        this.initThreeScene();
    },
    methods: {
        initThreeScene() {
            // Create a Three.js scene
            const scene = new THREE.Scene();

            // Create a camera
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.setZ(10);
            camera.position.setX(-3);

            // Create a renderer and append the canvas to the component's div
            const renderer = new THREE.WebGLRenderer({
                canvas: document.querySelector('#bg'),  
            });
            
            //set the pixel ratio to the window device pixel ration
            renderer.setPixelRatio(window.devicePixelRatio);
            //make it fullscreen
            renderer.setSize(window.innerWidth, window.innerHeight);

            // Create a shape for testing
            const cube = new THREE.TorusKnotGeometry( 5, 1, 300, 20, 4, 6 );
            const testingMaterial = new THREE.MeshStandardMaterial({ color: 0x5e2bff });
            const testingCube = new THREE.Mesh(cube, testingMaterial);
            testingCube.position.set(3,-0.5,-1);

            // Adding a point light
            const pointLight = new THREE.PointLight(0xffffff, 5);
            scene.add(testingCube);
            scene.add(pointLight);

            // Helpers
            // const lightHelper = new THREE.PointLightHelper(pointLight);
            // scene.add(lightHelper);

            // Update the light position based on the mouse coordinates
            function updateLightPosition(event) {
                const canvasRect = renderer.domElement.getBoundingClientRect();
                mouseX = ((event.clientX - canvasRect.left) / canvasRect.width) * 3.5 - 2;
                mouseY = -((event.clientY - canvasRect.top) / canvasRect.height) * 3.5 + 2;
                pointLight.position.set(mouseX, mouseY, 3.6);
            }

            // Event listener to get the mouse coordinates and update the light position
            let mouseX = 0;
            let mouseY = 0;
            document.addEventListener('mousemove', (e) => {
                updateLightPosition(e);
            });

            // Render the scene with the camera
            function animate() {
                requestAnimationFrame(animate);

                testingCube.rotation.x += 0.01;

                renderer.render(scene, camera);
            }
            animate();

            const sizes= {
                width: window.innerWidth,
                height: window.innerHeight
            }

            window.addEventListener('resize', ()=> {
                //Update sizes
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight

                //Update camera
                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()

                //Update renderer
                renderer.setSize(sizes.width, sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })  
        },
    },
};
</script>


