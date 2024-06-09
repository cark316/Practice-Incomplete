import React from 'react'
import * as THREE from 'three'
import grass from './assets/grass_block_side.png'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

const grassTexture = new THREE.TextureLoader().load( grass );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const material = new THREE.MeshStandardMaterial( { map: grassTexture } );

const cube = new THREE.Mesh( geometry, material );

const pointLight = new THREE.PointLight( 0xffffff, 5, 100 )
pointLight.position.set (5,5,5)

const ambientLight = new THREE.AmbientLight( 0xffffff )


const sphereSize = 3;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
const gridHelper = new THREE.GridHelper ( 200,50 );

scene.add( cube );
scene.add( pointLight, ambientLight );
scene.add( pointLightHelper, gridHelper );

camera.position.z = 5;

renderer.setSize( window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement)

function animate() {
  requestAnimationFrame( animate );
  
  controls.update();

  renderer.render ( scene, camera );
}

function randCube() {
  const geometry = new THREE.BoxGeometry( 1,1,1 );
  const material = new THREE.MeshStandardMaterial( {color : 0xffffff } );
  const cube = new THREE.Mesh ( geometry, material );

  const [ x , y , z ] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));
  
  cube.position.set ( x , y , z );
  scene.add( cube );
}

const App = () => {
  return (
    <>
    {animate()}
    {Array(50).fill().forEach( randCube )}
    </>
  )
}

export default App