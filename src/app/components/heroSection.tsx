'use client';
 

 import React from 'react';
 import { AiFillHtml5, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
 import { DiCss3, DiJavascript1, DiReact, DiNodejs, DiPython, DiJava, DiKomodo } from 'react-icons/di';
 import { SiNextdotjs, SiTailwindcss, SiPostgresql } from 'react-icons/si';
 

 const icons = [
  { icon: AiFillHtml5, color: '#E34F26' },
  { icon: DiCss3, color: '#1572B6' },
  { icon: DiJavascript1, color: '#F7DF1E' },
  { icon: DiReact, color: '#61DAFB' },
  { icon: SiNextdotjs, color: '#000000' },
  { icon: DiNodejs, color: '#339933' },
  { icon: DiPython, color: '#3776AB' },
  { icon: DiJava, color: '#b07219' },
  { icon: DiKomodo, color: '#F18E00' },
  { icon: SiTailwindcss, color: '#38B2AC' },
  { icon: SiPostgresql, color: '#336791' },
  { icon: AiFillGithub, color: '#181717' },
  { icon: AiFillLinkedin, color: '#0A66C2' },
 ];
 

 const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 animate-scattered-float">
          {icons.map((item, index) => (
            <item.icon
              key={index}
              size={Math.random() * 40 + 20}
              className="absolute opacity-20"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                color: item.color,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Deseja ter seu próprio site ou aplicativo?
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Conte com um desenvolvedor full-stack experiente para transformar sua visão em realidade.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contato"
              className="inline-block rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-300"
            >
              Entre em contato e saiba mais!
            </a>
            {/* Você pode adicionar outro botão aqui, se necessário */}
          </div>
        </div>
      </div>
    </div>
  );
 };
 

 export default HeroSection;