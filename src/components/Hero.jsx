import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

const Hero = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.from('.hero-text', {
      opacity: 0,
      y: 60,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div className="relative w-screen h-dvh overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/hero-1.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

      {/* Main Content */}
            <div className="relative z-20 flex flex-col items-start justify-start h-full px-6 sm:px-10 md:px-10 pt-24 sm:pt-32 md:pt-40">
        <h1 className="hero-text hero-heading special-font text-[--color-blue-100] text-6xl font-black leading-tight mb-3 tracking-tight">
           IGNITE <b>I</b>NTELLIGENCE
        </h1>
        <p className="hero-text text-[--color-blue-50] text-sm md:text-base max-w-sm  font-robert-regular leading-relaxed tracking-wide">
            Welcome to Astronyze — where neural vision meets motion design. <br />
    Redefining reality, one frame at a time.
        </p>
        <Button
          id="launch-mission"
  title="Launch Mission"
          leftIcon={<TiLocationArrow />}
          containerClass="hero-text bg-[--color-yellow-300] text-black font-bold flex-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
      </div>

      {/* Bottom Tagline */}
      <h1 className="special-font hero-heading absolute bottom-6 right-10 z-30 text-blue-100 text-3xl sm:text-5xl md:text-7xl lg:text-8xl opacity-90 tracking-wide">
  A<b>S</b>TRONYZE
</h1>

    </div>
  );
};

export default Hero;
