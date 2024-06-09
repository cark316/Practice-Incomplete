import { useLoader } from "@react-three/fiber";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

const Canvas = () => {
    const model = useLoader(GLTFLoader, "/falcon.glb");
    return (
        <>
            <primitive object={model.scene}  />
        </>
    )
}

export default Canvas;