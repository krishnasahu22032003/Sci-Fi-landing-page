import { useRef, useState, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bentotilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`
    );
  };

  const handleMouseLeave = () => setTransformStyle("");

  return (
    <div
      className={className + " feature-animate"}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const ImageCard = ({ imgSrc, title, description }) => (
  <div className="relative h-full w-full overflow-hidden rounded-2xl">
    <img
      src={imgSrc}
      alt="Feature"
      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-100"
    />
    <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 bg-black/30 text-white">
      <h1 className="bento-title special-font text-2xl md:text-3xl font-bold text-[--color-blue-100]">
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-64 text-sm md:text-base opacity-80">
          {description}
        </p>
      )}
    </div>
  </div>
);

const VideoCard = ({ src, title, description }) => (
  <div className="relative size-full">
    <video
      src={src}
      loop
      playsInline
      muted
      autoPlay
      className="absolute left-0 top-0 size-full object-cover object-center"
    />
    <div className="relative z-10 flex flex-col p-5 size-full justify-between text-[--color-blue-50]">
      <h1 className="bento-title special-font text-2xl md:text-3xl font-bold text-[--color-blue-100]">
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-64 text-sm md:text-base opacity-80">
          {description}
        </p>
      )}
    </div>
  </div>
);

const Features = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray(".feature-animate");

    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reset",
            scrub: false,
            markers: false,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-4 md:px-10">
        <div className="px-5 pb-24 feature-animate">
          <p className="font-display text-lg text-[--color-blue-50]">
            A world where neural interfaces craft the UI.
          </p>
          <p className="max-w-md font-display text-lg text-[--color-blue-50] opacity-50">
            Dive into visual cognition — blending neural data with artistic perception, forging the future of interface evolution.
          </p>
        </div>

        <Bentotilt className="border border-[--color-violet-500]/30 relative mb-7 h-96 w-full overflow-hidden rounded-2xl md:h-[65vh] shadow-xl">
          <VideoCard
            src="/videos/video-1.mp4"
            title={<>Reactive <b>Synapse</b></>}
            description="Interact with our intelligent neural interface where perception and motion react in sync."
          />
        </Bentotilt>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Bentotilt className="row-span-1 md:col-span-1 md:row-span-2 h-[450px]">
            <ImageCard
              imgSrc="/images/feature-1.jpg"
              title={<>Visual <b>Encoding</b></>}
              description="Real-time AI transforms cognition into dynamic motion aesthetics."
            />
          </Bentotilt>

          <Bentotilt className="md:col-span-1 h-[450px]">
            <ImageCard
              imgSrc="/images/feature-2.jpg"
              title={<>Gaze <b>Sync</b></>}
              description="Every movement aligns with the user’s focus, enhancing intuitive interaction."
            />
          </Bentotilt>

          <Bentotilt className="md:col-span-1 h-[450px]">
            <ImageCard
              imgSrc="/images/feature-3.jpg"
              title={<>Emotive <b>Flow</b></>}
              description="Interface evolves as it senses emotional flux via neural AI feedback."
            />
          </Bentotilt>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Bentotilt>
            <div className="flex flex-col size-full justify-between rounded-2xl p-6 shadow-lg bg-gradient-to-br from-[--color-violet-400] via-[--color-blue-500] to-[#100026] text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-purple-600/20 to-transparent opacity-30 pointer-events-none z-0" />
              <div className="relative z-10 flex flex-col gap-4">
                <h1 className="text-3xl md:text-4xl special-font font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]">
                  More <span className="text-[--color-blue-100]">Coming Soon</span>
                </h1>
                <p className="text-white/80 text-sm max-w-xs">
                  We're working on even more neural-powered visual features for the next-gen UI.
                </p>
              </div>
              <TiLocationArrow className="relative z-10 mt-4 self-end scale-[4] text-white/70 transition-all hover:text-[--color-blue-100] hover:rotate-12" />
            </div>
          </Bentotilt>

          <Bentotilt className="h-[450px]">
            <ImageCard
              imgSrc="/images/feature-4.jpg"
              title={<>Neural <b>Exploration</b></>}
              description="Layered cognition mapping next-gen user awareness."
            />
          </Bentotilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
