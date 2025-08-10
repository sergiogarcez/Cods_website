//Arquivo dedicado para o import da biblioteca Three.js.
//Esse arquivo instancia a biblioteca após ter baixado atraves do npm install three
// npm install @types/three pode ser necessario caso o typescript nao reconheça.
'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
    // Referência para o elemento canvas onde a cena será renderizada
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Assegure-se de que o elemento foi montado
        if (!mountRef.current) return;

        // Dimensões da tela
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Configuração da cena
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;

        // Configuração do renderizador
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // Adicione um cubo (ou qualquer outro objeto)
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Função de animação
        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Limpeza (para evitar memory leaks)
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []); // O array vazio assegura que o efeito rode apenas uma vez

    return (
        <div 
            ref={mountRef} 
            style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }} 
        />
    );
};

export default ThreeBackground;