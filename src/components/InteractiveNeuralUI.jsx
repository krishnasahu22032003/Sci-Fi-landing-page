import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const memories = [
  {
    year: '2042',
    title: 'Neural Genesis',
    desc: 'Birth of Astronyze Neural Core, enabling deep cognitive mapping.',
  },
  {
    year: '2044',
    title: 'Visual Sync Revolution',
    desc: 'Replaced traditional UI layers with AI-guided vision interfaces.',
  },
  {
    year: '2046',
    title: 'Emotion Pulse Protocol',
    desc: 'Emotion-driven motion design became an interactive reality.',
  },
  {
    year: '2048',
    title: 'Synaptic Mesh Online',
    desc: 'Launched neural mesh behavior prediction across the platform.',
  },
];

const InteractiveNeuralUI = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray('.timeline-node').forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80, rotateX: 10 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.8,
          ease: 'power4.out',
          delay: i * 0.25,
        }
      );
    });

    gsap.fromTo(
      sectionRef.current.querySelector('.timeline-title'),
      { opacity: 0, y: 120, scale: 0.9, rotateX: 20 },
      {
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.timeline-title'),
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 2.4,
        ease: 'power4.out',
      }
    );

    gsap.fromTo(
      sectionRef.current.querySelector('.timeline-subtext'),
      { opacity: 0, y: 90, scale: 0.95, rotateX: 15 },
      {
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.timeline-subtext'),
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 2.4,
        ease: 'power4.out',
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 100, rotateX: 10, scale: 0.95 },
      {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 2.2,
        ease: 'power4.out',
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative w-full py-28 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
        <h2 className="timeline-title text-4xl md:text-5xl font-extrabold tracking-tight text-[--color-blue-100] mb-5">
          Neural Memory Timeline
        </h2>
        <p className="timeline-subtext text-lg text-[--color-blue-50] max-w-xl mx-auto">
          Journey through our neural evolution — where data meets memory.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 relative z-10">
        {/* Left Content */}
        <div className="flex-1">
          <div className="border-l-2 border-[--color-violet-500]/30 pl-6">
            {memories.map((item, index) => (
              <div key={index} className="timeline-node mb-16 relative">
                <div className="absolute -left-3 top-1.5 w-6 h-6 bg-[--color-violet-500] rounded-full shadow-lg animate-pulse" />
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {item.year} — {item.title}
                </h3>
                <p className="text-sm text-[--color-blue-50] max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-6">
          <img
            ref={imageRef}
            src="/images/memories-1.png"
            alt="Timeline Visual"
            className="w-full h-110 max-w-md rounded-3xl "
          />
        </div>
      </div>
    </section>
  );
};

export default InteractiveNeuralUI;
