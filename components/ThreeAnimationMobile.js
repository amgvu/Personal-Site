import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeAnimationMobile = () => {
  const containerRef = useRef();
  const cameraRef = useRef();

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = -1.0;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth * 0.90, window.innerHeight * 0.90);
    containerRef.current.appendChild(renderer.domElement);

    // Cube
    const geometry = new THREE.IcosahedronGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.5, metalness: 1.0, wireframe: false });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lights
    const light = new THREE.PointLight(0xffffff, 10);
    light.position.set(2, 5, 5);
    scene.add(light);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    scene.add(directionalLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.002;
      cube.rotation.y += 0.002;
      renderer.render(scene, cameraRef.current);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="mx-auto mt-10 flex flex-auto" style={{ width: '100%', height: '100%' }} ref={containerRef} />;
};

export default ThreeAnimationMobile;