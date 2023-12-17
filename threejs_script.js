import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//npx vite on terminal to run this page (see three.js docs)


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

const light = new THREE.AmbientLight(0xfff5d4); 
scene.add(light); 

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

camera.position.z = -30;
camera.position.x = 30;
camera.position.y = 20;

camera.rotateX(0);
camera.rotateY(-90);
camera.rotateZ(-90);

scene.position.y = 10;
scene.position.x = 20;
scene.position.z = -20;

const loader = new GLTFLoader();

loader.load("fas_room1.glb", function (gltf) {
	scene.add(gltf.scene);
});


const controls = new OrbitControls( camera, renderer.domElement );

function animate() { 
	requestAnimationFrame(animate);
	renderer.render( scene, camera ); 
	controls.update();

} 

animate();


