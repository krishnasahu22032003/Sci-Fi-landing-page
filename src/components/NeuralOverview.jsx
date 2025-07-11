import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Neural Visual Sync',
    desc: 'A seamless sync between visual patterns and neural intent, crafted for futuristic design workflows.',
    icon: '/images/icon-1.svg',
  },
  {
    title: 'Cognitive UI Mapping',
    desc: 'Dynamically adapt UI structures based on neural prediction and real-time user focus.',
    icon: '/images/icon-2.svg',
  },
  {
    title: 'Emotion-Powered Motion',
    desc: 'React to micro-emotional states with animated transitions powered by AI feedback loops.',
    icon: '/images/icon-3.svg',
  },
  {
    title: 'Synaptic Behavior Mesh',
    desc: 'Model and simulate interaction patterns through a 3D synaptic mesh responsive to gaze and gestures.',
    icon: '/images/icon-4.svg',
  },
  {
    title: 'Quantum Intent Channels',
    desc: 'Channel subconscious intent into actionable interface layers using adaptive neural decoding.',
    icon: '/images/icon-1.svg',
  },
  {
    title: 'Reality Distortion Layer',
    desc: 'A UI layer that transforms visual output based on user-driven cognitive modulation and feedback.',
    icon: '/images/icon-2.svg',
  },
];

const NeuralOverview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.feature-card');
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
            scrub: false,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: 'power3.out',
          delay: i * 0.15,
        }
      );
    });

    gsap.fromTo(
      sectionRef.current.querySelector('.overview-title'),
      { opacity: 0, y: 100, rotateX: 15 },
      {
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.overview-title'),
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          scrub: false,
        },
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 2.2,
        ease: 'power4.out',
      }
    );

    gsap.fromTo(
      sectionRef.current.querySelector('.overview-subtext'),
      { opacity: 0, y: 60, rotateX: 10 },
      {
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.overview-subtext'),
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          scrub: false,
        },
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 2.2,
        ease: 'power4.out',
      }
    );
  }, []);

  return (
    <section
      id="neural"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-black via-zinc-900 to-black text-white py-24 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-16 px-4">
        <h2 className="overview-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[--color-blue-100] mb-4">
          Neural Overview
        </h2>
        <p className="overview-subtext text-sm sm:text-base md:text-lg text-[--color-blue-50] max-w-2xl mx-auto">
          Explore the core intelligence that drives Astronyze. Beyond pixels — into perception.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="feature-card relative h-96 p-6 sm:p-7 md:p-8 bg-gradient-to-br from-[--color-violet-950]/50 to-[--color-violet-600]/30 backdrop-blur-lg border border-[--color-violet-300] rounded-3xl shadow-2xl hover:shadow-violet-500/40 transition-all duration-300 hover:scale-[1.04] hover:ring-1 hover:ring-violet-500"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-[--color-blue-50] leading-relaxed">
              {feature.desc}
            </p>
            <img
              src={feature.icon}
              alt={`${feature.title} icon`}
              className="absolute bottom-4 left-4 w-12 h-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeuralOverview;
