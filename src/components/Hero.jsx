import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './Button';
import NeuralParticles from './NeuralParticles';
import { TiLocationArrow } from 'react-icons/ti';

const SciFiTerminal = () => (
  <div className="w-[320px] p-4 absolute left-0 top-full mt-2 rounded-lg bg-black/80 border border-[--color-violet-300] text-green-400 font-mono shadow-md transition-all duration-300">
    <p className="text-xs opacity-70 animate-pulse">[ASTRONYZE OS v0.1] Booting Mission...</p>
    <p className="text-xs"> NeuralSync : ACTIVE</p>
    <p className="text-xs"> VisualCore : ONLINE</p>
    <p className="text-xs"> Target Lock : ENGAGED</p>
  </div>
);

const Hero = () => {
  const videoRef = useRef(null);
  const [showTerminal, setShowTerminal] = useState(false);

  // Cursor Glow Movement
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    const move = (e) => {
      gsap.to(glow, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.2,
        ease: 'power2.out',
      });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // GSAP Text Animations
  useGSAP(() => {
    gsap.from('.hero-text', {
      opacity: 0,
      y: 60,
      duration: 1.5,
      stagger: 0.25,
      ease: 'power4.out',
    });
    gsap.from('.hero-brand', {
      opacity: 0,
      y: 20,
      delay: 1,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative w-screen h-dvh overflow-hidden bg-black text-white"
    >
      {/* Particle Neural Grid Background */}
      <NeuralParticles />

      {/* Cursor Glow */}
      <div
        id="cursor-glow"
        className="fixed z-50 w-10 h-10 bg-white/50 blur-2xl rounded-full pointer-events-none"
      />

      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/hero-1.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      />



      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-start justify-start h-full px-6 sm:px-10 md:px-10 pt-24 sm:pt-32 md:pt-40">
        <h1 className="hero-text hero-heading special-font text-f0f2fa text-6xl font-black leading-tight mb-1 tracking-wide">
          IGNITE <b>I</b>NTELLIGENCE
        </h1>
        <p className="hero-text text-light text-sm md:text-base max-w-sm mb-5 pt-0 font-robert-regular leading-relaxed tracking-wide">
          Welcome to Astronyze — where neural vision meets motion design. <br />
          Redefining reality, one frame at a time.
        </p>

        {/* Button with Sci-Fi Terminal */}
        <div
          className="relative flex flex-col items-start"
          onMouseEnter={() => setShowTerminal(true)}
          onMouseLeave={() => setShowTerminal(false)}
        >
          <Button
            id="launch-mission"
            title="Launch Mission"
            leftIcon={<TiLocationArrow />}
            containerClass="hero-text bg-white/10 text-white font-bold flex-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform backdrop-blur"
          />
          {showTerminal && <SciFiTerminal />}
        </div>
      </div>

      {/* Brand/Tagline at Bottom Right */}
      <h1 className="hero-brand special-font hero-heading absolute bottom-6 right-10 z-30 text-f0f2fa text-3xl sm:text-5xl md:text-7xl lg:text-8xl opacity-90 tracking-wider">
        A<b>S</b>TRONYZE
      </h1>
    </section>
  );
};

export default Hero;