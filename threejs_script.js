import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { ArcballControls } from 'three/addons/controls/ArcballControls.js';


//npm vite on terminal to run this page (see three.js docs)

const loader = new GLTFLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

const light = new THREE.AmbientLight( 0xfff5d4 ); // soft white light
scene.add(light); 

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

camera.position.z = -10;
camera.position.x = 10;
camera.position.y = 18;

camera.rotateX(0);
camera.rotateY(-90);
camera.rotateZ(-90);

scene.position.y = 10;
scene.position.x = 10;
scene.position.z = -10;

loader.load("fas_room1.glb", function (gltf) {
	scene.add(gltf.scene);
});

function animate() { 
	requestAnimationFrame(animate);
	renderer.render( scene, camera ); 
} 

animate();

const controls = new ArcballControls( camera, renderer.domElement, scene );

controls.addEventListener( 'change', function () {

	renderer.render( scene, camera );

} );

controls.update();