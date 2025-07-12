import { useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapReveal = () => {
  useEffect(() => {
    const items = gsap.utils.toArray(".usecase-animate");

    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);
};

const UseCases = () => {
  useGsapReveal();

  const useCases = [
    {
      title: "Creative Workflows",
      description: "Generate and iterate visuals using thought-driven UI tools for digital artists.",
      img: "/images/usecase-1.jpg",
    },
    {
      title: "Neural Interfaces",
      description: "Seamless BCI integration for adaptive software that evolves with your focus and emotion.",
      img: "/images/usecase-2.jpg",
    },
    {
      title: "Adaptive Gaming UX",
      description: "Build hyper-responsive gameplay powered by neural input — from gaze to emotional cues.",
      img: "/images/usecase-3.jpg",
    },
  ];

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#0d0d1c] via-[#0a0a0f] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.04)_0%,transparent_60%)] z-0" />

      <div className="relative z-10 container mx-auto px-4 md:px-10">
        <div className="mb-16 text-center usecase-animate">
          <h2 className="text-4xl md:text-5xl font-bold special-font text-[--color-blue-50] drop-shadow-[0_0_10px_rgba(100,149,255,0.25)]">
            Real-World Applications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[--color-blue-50]/70">
            Explore how our neural interface transforms industries with futuristic, reactive UI experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl usecase-animate group transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_30px_#3b82f6aa] overflow-hidden aspect-[4/5] md:h-[420px]"
            >
              {/* Image layer */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 will-change-transform"
              />

              {/* Overlay content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 bg-black/40  text-white">
                <h3 className="text-2xl font-bold special-font text-[--color-blue-100] mb-2 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 max-w-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-16 usecase-animate">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[--color-violet-400]/30 via-[--color-blue-500]/20 to-[#0d0d1c] p-10 shadow-xl backdrop-blur-sm border border-[--color-violet-500]/40">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl md:text-4xl special-font font-bold text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
                  <span className="text-[--color-blue-100]">Coming Soon:</span> Real-time Neural APIs
                </h3>
                <p className="mt-3 text-white/70 text-sm max-w-md">
                  We’re building developer-ready neural APIs to power custom brain-UX apps — stay tuned.
                </p>
              </div>
              <TiLocationArrow className="text-white/80 scale-[4] self-end md:self-auto transition-transform hover:rotate-12 hover:text-[--color-blue-100]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
