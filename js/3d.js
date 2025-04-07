import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#scene"),
  alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(500, 500);

const loader = new GLTFLoader();
const camera = new THREE.PerspectiveCamera(75, 500/500, 0.1, 1000);
camera.position.set(-0.4, 0.4, 0.8); 

loader.load(
    '../assets/3D/final/wooden_chair.gltf', (gltf) => {
        const model = gltf.scene;
        model.translateY(-0.4)
        scene.add(model);
        scene.add(camera);
    },

    function(xhr) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },

    function(error) {
        console.log("An error has occured.");
    },
);

const controls = new OrbitControls(camera, renderer.domElement);
controls.minPolarAngle = 0;
controls.maxPolarAngle = Math.PI * 0.5;
controls.enableZoom = false;
controls.enablePan = false;

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    // console.log(camera.position);
}

animate();