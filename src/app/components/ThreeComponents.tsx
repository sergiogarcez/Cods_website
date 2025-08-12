//Arquivo dedicado para o import da biblioteca Three.js.
//Esse arquivo instancia a biblioteca após ter baixado atraves do npm install three
// npm install @types/three pode ser necessario caso o typescript nao reconheça.
'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    if (!mountRef.current) return;

    // --- INÍCIO: REORDENADO E MODIFICADO PARA LOOP ---
    // 1. Configuração da cena, câmera e renderizador
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // 2. Array para armazenar as bolinhas
    const particles: THREE.Mesh[] = [];

    // Função para criar uma nova bolinha
    const createParticle = () => {
        const geometry = new THREE.SphereGeometry(0.05 + Math.random() * 0.1, 8, 8); // Tamanho aleatório
        const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
        const particle = new THREE.Mesh(geometry, material);

        // Posição inicial aleatória
        particle.position.x = (Math.random() - 0.5) * 5;
        particle.position.y = (Math.random() - 0.5) * 5;
        particle.position.z = -5; // Começam mais longe

        scene.add(particle);
        particles.push(particle);
    };

    // Gere algumas bolinhas iniciais
    for (let i = 0; i < 50; i++) {
        createParticle();
    }

    // Loop de animação
    const animate = () => {
        requestAnimationFrame(animate);

        // Gere novas bolinhas periodicamente
        if (Math.random() > 0.95) { // Ajuste a probabilidade para controlar a taxa de geração
            createParticle();
        }

        // Animação das bolinhas
        particles.forEach(particle => {
            particle.position.z += 0.05 + Math.random() * 0.05; // Movimento para frente com variação
            particle.position.x += (Math.random() - 0.5) * 0.02; // Pequeno movimento lateral
            particle.position.y += (Math.random() - 0.5) * 0.02;

            // Remova as bolinhas que saíram da frente para otimização
            if (particle.position.z > 10) {
                scene.remove(particle);
                particles.splice(particles.indexOf(particle), 1);
            }
        });

        renderer.render(scene, camera);
    };
    animate();

    // --- FIM: MODIFICADO PARA LOOP CONTÍNUO ---

    // Lógica de limpeza
    return () => {
        if (mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        // A lógica de dispose completa para geometrias e materiais removidos seria mais complexa
    };
}, []);

    return (
    <div
        ref={mountRef}
        style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
    />
    );
    };
export default ThreeBackground;