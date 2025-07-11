import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

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

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const Bentocard = ({ src, title, description }) => {
  return (
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
};

const Features = () => {
  return (
    <section className=" py-28">
      <div className="container mx-auto px-4 md:px-10">
        <div className="px-5 pb-24">
          <p className="font-display text-lg text-[--color-blue-50]">
            A world where neural interfaces craft the UI.
          </p>

          <p className="max-w-md font-display text-lg text-[--color-blue-50] opacity-50">
            Dive into visual cognition — blending neural data with artistic perception, forging the future of interface evolution.
          </p>
        </div>

        <Bentotilt className="border border-[--color-violet-500]/30 relative mb-7 h-96 w-full overflow-hidden rounded-2xl md:h-[65vh] shadow-xl">
          <Bentocard
            src="https://res.cloudinary.com/dq6gs5w21/video/upload/f_auto,q_auto/v1750270967/featuresss-1_k79rab.mp4"
            title={<>Reactive <b>Synapse</b></>}
            description="Interact with our intelligent neural interface where perception and motion react in sync."
          />
        </Bentotilt>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Bentotilt className="row-span-1 md:col-span-1 md:row-span-2">
            <Bentocard
              src="https://res.cloudinary.com/dq6gs5w21/video/upload/f_auto,q_auto/v1750270953/features-2_pk2bol.mp4"
              title={<>Visual <b>Encoding</b></>}
              description="Real-time AI transforms cognition into dynamic motion aesthetics."
            />
          </Bentotilt>

          <Bentotilt className="md:col-span-1">
            <Bentocard
              src="https://res.cloudinary.com/dq6gs5w21/video/upload/f_auto,q_auto/v1750270934/feature-3_b1d1uk.mp4"
              title={<>Gaze <b>Sync</b></>}
              description="Every movement aligns with the user’s focus, enhancing intuitive interaction."
            />
          </Bentotilt>

          <Bentotilt className="md:col-span-1">
            <Bentocard
              src="https://res.cloudinary.com/dq6gs5w21/video/upload/f_auto,q_auto/v1750270938/feature-4_m0q2lw.mp4"
              title={<>Emotive <b>Flow</b></>}
              description="Interface evolves as it senses emotional flux via neural AI feedback."
            />
          </Bentotilt>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Bentotilt>
            <div className="flex flex-col size-full justify-between bg-[--color-violet-300] p-5 rounded-2xl shadow-md">
              <h1 className="bento-title special-font max-w-64 text-black text-2xl font-bold">
                More Coming Soon
              </h1>
              <TiLocationArrow className="m-5 scale-[4] self-end text-black" />
            </div>
          </Bentotilt>

          <Bentotilt>
            <video
              src="https://res.cloudinary.com/dq6gs5w21/video/upload/f_auto,q_auto/v1750270950/hero-3_zgagqm.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center rounded-2xl shadow-md"
            />
          </Bentotilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
