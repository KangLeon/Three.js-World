import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = 800; // Width
    const height = 500; // Height

    // Scene
    const scene = new THREE.Scene();

    // Model
    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // AxesHelper
    const axesHelper = new THREE.AxesHelper(250);
    scene.add(axesHelper);

    // Camera
    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
    camera.position.set(292, 223, 185);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", () => {
      renderer.render(scene, camera);
    });

    // Initial render
    renderer.render(scene, camera);

    // Clean up on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;
