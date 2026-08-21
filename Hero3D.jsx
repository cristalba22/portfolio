import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Animated wireframe shapes + particle field behind the hero section.
export default function Hero3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const heroSection = canvas.closest('.hero');
    let width = heroSection.clientWidth;
    let height = heroSection.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 34;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch (e) {
      return; // WebGL unavailable, skip gracefully
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const colors = [0xa855f7, 0x22d3ee, 0xec4899, 0xfacc15];

    const shapes = [];
    const geometryTypes = [
      () => new THREE.IcosahedronGeometry(6, 0),
      () => new THREE.OctahedronGeometry(5, 0),
      () => new THREE.TorusGeometry(4, 1.2, 8, 24),
    ];

    const positions = [
      [-16, 4, -6],
      [14, 8, -12],
      [8, -8, -4],
      [-10, -10, -10],
    ];

    positions.forEach((pos, i) => {
      const geo = geometryTypes[i % geometryTypes.length]();
      const mat = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        wireframe: true,
        transparent: true,
        opacity: 0.55,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(pos[0], pos[1], pos[2]);
      mesh.userData.spin = {
        x: (Math.random() - 0.5) * 0.006,
        y: (Math.random() - 0.5) * 0.008,
      };
      scene.add(mesh);
      shapes.push(mesh);
    });

    const particleCount = 160;
    const particleGeo = new THREE.BufferGeometry();
    const positionsArr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positionsArr[i * 3] = (Math.random() - 0.5) * 70;
      positionsArr[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positionsArr[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positionsArr, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.35,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    let rafId;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animate() {
      rafId = requestAnimationFrame(animate);
      shapes.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.spin.x;
        mesh.rotation.y += mesh.userData.spin.y;
      });
      particles.rotation.y += 0.0006;

      camera.position.x += (mouseX * 4 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 3 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    const onResize = () => {
      width = heroSection.clientWidth;
      height = heroSection.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      shapes.forEach((mesh) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="hero3d" className="hero-3d" aria-hidden="true"></canvas>;
}
