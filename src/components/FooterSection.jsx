import {
  FaXTwitter,
  FaGithub,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa6"; // You can also use FaTwitter if you prefer the old logo

const FooterSection = () => {
  return (
    <footer className="relative z-10 bg-black pt-20 pb-10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0d0d1c] to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-white">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-10">
          {/* Logo + Tagline */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold special-font text-white">
              NeuroSpark<span className="text-[--color-blue-100]">.</span>
            </h1>
            <p className="mt-2 text-white/60 text-sm max-w-sm">
              Building the future of human-machine symbiosis through neural UI and perceptual design.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[--color-blue-100] transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[--color-blue-100] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://discord.gg/yourserver"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[--color-blue-100] transition"
            >
              <FaDiscord />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[--color-blue-100] transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} NeuroSpark. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
