import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiArrowForward } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

const useGsapRevealCTA = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta-wrapper",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      ".cta-title",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        ".cta-description",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ".cta-button",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" },
        "-=0.5"
      );
  }, []);
};

const CtaSection = () => {
  useGsapRevealCTA();

  return (
    <section id="transmission" className="relative py-28 bg-black overflow-hidden z-10">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b11] via-[#050508] to-black" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(0,140,255,0.05)_0%,_transparent_65%)]" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,_rgba(144,0,255,0.06)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="cta-wrapper relative z-10 container mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[--color-violet-400]/20 via-[--color-blue-500]/10 to-black p-10 md:p-16 border border-[--color-blue-300]/30 backdrop-blur-md shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_#1e3a8aaa]">
          
          {/* Title */}
          <h2 className="cta-title text-3xl sm:text-4xl md:text-5xl font-bold special-font text-white drop-shadow-[0_0_15px_rgba(93,210,255,0.2)] max-w-4xl leading-tight">
            Ready to build the future with{" "}
            <span className="text-[--color-blue-100]">Neural Interfaces</span>?
          </h2>

          {/* Description */}
          <p className="cta-description mt-4 max-w-xl text-white/80 text-lg">
            Join the beta and explore a new frontier in reactive UI powered by real-time neural data and perceptual interaction.
          </p>

          {/* CTA Button */}
          <div className="cta-button mt-10 group relative inline-flex items-center justify-center">
            <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[--color-blue-100] via-[--color-violet-neon] to-[--color-blue-100] blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            <a
              href="#"
              className="relative inline-flex items-center gap-3 rounded-full px-7 py-3 md:px-9 md:py-3.5 text-sm md:text-base font-semibold text-white bg-black border border-[--color-blue-100]/40 hover:border-[--color-blue-100] transition-all backdrop-blur-md z-10"
            >
              Join Beta
              <TiArrowForward className="text-xl text-[--color-blue-100] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
