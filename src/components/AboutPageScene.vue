<template>
  <canvas id="bg"></canvas>
</template>

<script>
import * as THREE from 'three';
import portraitImage from '../assets/Portrait.jpg';

export default {
  mounted() {
    this.initThreeScene();
  },
  methods: {
    initThreeScene() {
      //Creating the scene
      const scene = new THREE.Scene();

      //Creating the camera
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      //Creating the renderer
      const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });

      //set pixel ratio to the window device pixel ratio
      renderer.setPixelRatio(window.devicePixelRatio);

      //make it fullscreen
      renderer.setSize(window.innerWidth, window.innerHeight);

      //Change camera position to be a bit further from the starting position of (0,0,0)
      camera.position.setZ(20);

      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
      };

      // Creating the portrait
      const portraitTexture = new THREE.TextureLoader().load(portraitImage);
      const portrait = new THREE.Mesh(
        new THREE.BoxGeometry(14,14,0.5),
        new THREE.MeshBasicMaterial({ map: portraitTexture}) );

      //lights
      const ambientLight = new THREE.AmbientLight( 0x404040 )

      //Random Generation
      function addStar(){
        const geometry = new THREE.SphereGeometry(0.20, 24 , 24);
        const material = new THREE.MeshBasicMaterial( {color:0xffffff});
        const star = new THREE.Mesh(geometry, material);

        const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
        
        star.position.set(x,y,z);
        scene.add(star)
      }

      Array(200).fill().forEach(addStar)
      
      //Random Generation
      function addplanets(){
        const geometry = new THREE.SphereGeometry(1, 24 , 24);
        const material = new THREE.MeshBasicMaterial( {color:0xffffff});
        const star = new THREE.Mesh(geometry, material);

        const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
        
        star.position.set(x,y,z);
        scene.add(star)
      }

      Array(25).fill().forEach(addplanets)

      // Helpers  
      //const gridHelper = new THREE.GridHelper(200, 50);

      scene.add(ambientLight)
      //scene.add(gridHelper);
      scene.add(portrait);

      //repositioning the portrait to be in the left-side of the screen
      portrait.position.setX(16)

      window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      let rotateDirectionY = 1; // 1 for positive, -1 for negative
      let rotateDirectionX = 1; // 1 for positive, -1 for negative
      let rotationSpeed = 0.0005;

      // Animation loop function
      function animate() {
        requestAnimationFrame(animate);

        // Rotate the portrait around the y-axis
        portrait.rotation.y += rotationSpeed * rotateDirectionY;

        // Rotate the portrait around the x-axis
        portrait.rotation.x += rotationSpeed * rotateDirectionX;

        // Switch rotation direction for y-axis
        if (portrait.rotation.y >= Math.PI / 20 || portrait.rotation.y <= -Math.PI / 9) {
          rotateDirectionY *= -1;
        }

        // Switch rotation direction for x-axis
        if (portrait.rotation.x >= Math.PI / 25 || portrait.rotation.x <= -Math.PI / 25) {
          rotateDirectionX *= -1;
        }

        // Update the renderer
        renderer.render(scene, camera);
      }
      animate();
    }
  }
};
</script>
