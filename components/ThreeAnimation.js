import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeAnimation = () => {
  const containerRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.3, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);
    containerRef.current.appendChild(renderer.domElement);

    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.5, metalness: 1 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lights
    const light = new THREE.PointLight(0xffffff, 50);
    light.position.set(5, 5, 5);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += mouseRef.current.y * 0.005;
      cube.rotation.y += mouseRef.current.x * 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Mouse event handlers
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 3 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 3 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth * 0.6 / window.innerHeight * 0.6;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="mx-auto mt-10 flex flex-auto" ref={containerRef} />;
};

export default ThreeAnimation;






