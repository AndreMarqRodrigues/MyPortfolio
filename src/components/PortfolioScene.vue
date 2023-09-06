<template>
    <canvas id="bg"></canvas>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import planeTexture from '../assets/PlaneTexture.jpg';
import waterTexture from '../assets/waterTexture.jpg';
import mlTexture from '../assets/machineLearningTexture.png';
import karenObjectTexture from '../assets/KarenObjectTexture.jpg';
import GamingboardTexture from '../assets/GamingboardTexture.avif';
export default {
    mounted() {
        this.initThreeScene();
    },
    methods: {
        initThreeScene(){
            //Creating the scene
            const scene = new THREE.Scene();
            //Creating the camera
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 4.5;
            camera.position.y = 2.5;
            const renderer = new THREE.WebGLRenderer({
                canvas: document.querySelector('#bg'),  
            });

            //const controls = new OrbitControls(camera, renderer.domElement);
            
            //set the pixel ratio to the window device pixel ration
            renderer.setPixelRatio(window.devicePixelRatio);
            //make it fullscreen
            renderer.setSize(window.innerWidth, window.innerHeight);

            //Object creation
            const floorBeam = new THREE.BoxGeometry(0.2,0.2,500);
            const testingMaterial = new THREE.MeshStandardMaterial({color: 0x00a2ff})
            const leftBeam = new THREE.Mesh(floorBeam,testingMaterial);
            const rightBeam = new THREE.Mesh(floorBeam, testingMaterial);
            const rightTopBeam = new THREE.Mesh(floorBeam,testingMaterial);
            const leftTopBeam = new THREE.Mesh(floorBeam,testingMaterial);
            const arches = new THREE.TorusGeometry(6,0.5,10,200,3.15);
            const secondArchBlackColor = new THREE.MeshStandardMaterial({color : 0x151313})
            const firstArch = new THREE.Mesh(arches, testingMaterial);
            const secondArch = new THREE.Mesh(arches, secondArchBlackColor);
            const thirdArch = new THREE.Mesh(arches, testingMaterial);
            const sphereShape = new THREE.SphereGeometry(4, 32 , 16)
            const waterTextureLoaded = new THREE.TextureLoader().load(waterTexture);
            const waterMaterial = new THREE.MeshStandardMaterial({map: waterTextureLoaded});
            const sphere = new THREE.Mesh(sphereShape, waterMaterial);
            const mlTextureLoaded= new THREE.TextureLoader().load(mlTexture);
            const mlcubeMaterial = new THREE.MeshBasicMaterial({map : mlTextureLoaded});
            const cubeshape = new THREE.BoxGeometry(5,3,5);
            const mlcube = new THREE.Mesh(cubeshape, mlcubeMaterial);
            const planeTextureLoaded = new THREE.TextureLoader().load(planeTexture);
            const planeMaterial = new THREE.MeshStandardMaterial({ map: planeTextureLoaded });
            const RingShape = new THREE.RingGeometry(4,30,10);
            const ringmaterial = new THREE.MeshBasicMaterial({color: 0x000000});
            const ring = new THREE.Mesh(RingShape, ringmaterial);
            const karenTextureLoaded = new THREE.TextureLoader().load(karenObjectTexture)
            const karenMaterial = new THREE.MeshBasicMaterial({map : karenTextureLoaded});
            const karenShape = new THREE.OctahedronGeometry(2.5,1);
            const karenObj = new THREE.Mesh(karenShape, karenMaterial);
            const gamingTextureLoaded = new THREE.TextureLoader().load(GamingboardTexture);
            const GamingBoard = new THREE.Mesh(
            new THREE.BoxGeometry(5,5,0.5),
            new THREE.MeshBasicMaterial({ map: gamingTextureLoaded}) );
            const torusMaterial = new THREE.MeshNormalMaterial()
            const torusShape = new THREE.TorusKnotGeometry(3, 1, 300, 20, 4, 6 );
            const torus = new THREE.Mesh(torusShape, torusMaterial)

            // Creating a grid of plane objects
            const gridSizeX = 10; // Number of squares in the x-axis
            const gridSizeZ = 200; // Number of squares in the z-axis
            const squareSize = 4; // Size of each square

            for (let i = 0; i < gridSizeX; i++) {
                for (let j = 0; j < gridSizeZ; j++) {
                    const plane = new THREE.Mesh(
                    new THREE.PlaneGeometry(squareSize, squareSize),
                    planeMaterial
                );
            plane.position.x = ((i - gridSizeX / 2) + 0.5) * squareSize;
            plane.position.z = (j - gridSizeZ / 2) * squareSize;
            plane.rotation.x = -Math.PI / 2; // Rotate to be horizontal
            scene.add(plane);
                }
            }

        
            // Function to add point lights
            function addPointLights(count, spacing, zPosition) {
                for (let i = 0; i < count; i++) {
                    const pointLight = new THREE.PointLight(0xffffff, 100);
                    pointLight.position.setY(3);
                    pointLight.position.setZ(zPosition + i * spacing);
                    scene.add(pointLight);
                }
            }

            // Add multiple point lights along the z-axis
            const pointLightForSphere = new THREE.PointLight(0xffffff, 300);
            const pointLightsCount = 20; // Number of point lights
            const pointLightsSpacing = 20; // Spacing between point lights
            const pointLightsZPosition = -180; // Starting z position
            addPointLights(pointLightsCount, pointLightsSpacing, pointLightsZPosition);
            
            //Object Positioning
            torus.position.set(-6, 5, -150)
            GamingBoard.position.set(6,4,-108)
            karenObj.position.set(-6,2.5,-74)
            ring.position.set(0,0,-27);
            mlcube.position.set(5,3, -35);
            pointLightForSphere.position.set(0, 8, -8)
            sphere.position.set(0,8,-20);
            leftBeam.position.setX(-4)
            rightBeam.position.setX(4)
            rightTopBeam.position.setX(-4)
            rightTopBeam.position.setY(6)
            rightTopBeam.position.setZ(226)
            leftTopBeam.position.setX(4)
            leftTopBeam.position.setY(6)
            leftTopBeam.position.setZ(226)
            secondArch.position.setZ(-8)
            thirdArch.position.setZ(-16)



            //Helpers
            scene.add(torus)
            scene.add(GamingBoard)
            scene.add(karenObj)
            scene.add(ring)
            scene.add(mlcube)
            scene.add(sphere)
            scene.add(leftTopBeam)
            scene.add(rightTopBeam)
            scene.add(leftBeam)
            scene.add(rightBeam)
            scene.add(firstArch)
            scene.add(secondArch)
            scene.add(thirdArch)
            scene.add(pointLightForSphere)


            function moveCamera() {
                const positionOfTheUserInThePage = document.body.getBoundingClientRect().top;
                const zOffset = 4.5;
                const zOffsetChange = -0.0252; 


                camera.position.z = zOffset - positionOfTheUserInThePage * zOffsetChange;
                camera.position.x = 0;
                camera.position.y = 2.5; 
}

document.body.onscroll = moveCamera;



            const sizes= {
                width: window.innerWidth,
                height: window.innerHeight
            }



            let rotateDirectionY = 1; // 1 for positive, -1 for negative
            let rotateDirectionX = 1; // 1 for positive, -1 for negative
            let rotationSpeed = 0.003;


            // Render the scene with the camera
            function animate() {
                //controls.update();
                mlcube.rotation.y += 0.005;
                sphere.rotation.y += 0.005;
                torus.rotation.x += 0.01;
                torus.rotation.y += 0.005;
                torus.rotation.z += 0.005;

                // Rotate the portrait around the y-axis
                GamingBoard.rotation.y += rotationSpeed * rotateDirectionY;

                // Rotate the portrait around the x-axis
                GamingBoard.rotation.x += rotationSpeed * rotateDirectionX;

                // Switch rotation direction for y-axis
                if (GamingBoard.rotation.y >= Math.PI / 20 || GamingBoard.rotation.y <= -Math.PI / 9) {
                rotateDirectionY *= -1;
                }

                // Switch rotation direction for x-axis
                if (GamingBoard.rotation.x >= Math.PI / 25 || GamingBoard.rotation.x <= -Math.PI / 25) {
                rotateDirectionX *= -1;
                }           

                karenObj.rotation.x += 0.01;
                karenObj.rotation.y += 0.01;
                karenObj.rotation.z += 0.01;

                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            }
            animate();


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
        }
    }
}
</script>
<style scoped>

canvas {
  position: fixed;
  top: 0;
  left: 0;
}
</style>