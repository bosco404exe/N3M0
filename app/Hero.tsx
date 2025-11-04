import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Hero = () => (
  <section>
    <header className="relative z-10 pt-24 sm:pt-28 md:pt-32 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="font-mono max-w-2xl w-full">
        <h1 className="text-4xl text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-2 sm:mb-4">
          ABSTERR.DEV
        </h1>

        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-32 sm:w-40 md:w-48 h-1 bg-foreground"></div>
        </div>

        <p className="text-center text-xs sm:text-sm md:text-base text-gray-600 tracking-widest mb-6 sm:mb-8">
          &gt; FULL-STACK DEVELOPER
        </p>

        <div className="text-center mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed text-gray-700">
          <p>
            Hi, my name is{" "}
            <span className="bg-foreground text-sm text-background px-2 py-1 inline-block rounded-2xl">
              Abba Is'haq
            </span>{" "}
            — I am a software developer, a true definition of a Philomath and a
            Tech addict. I strive to bring innovative ideas to life. My goal is
            to craft seamless digital experiences that not only meet but exceed
            client expectations.
          </p>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-foreground text-background font-semibold text-xs sm:text-sm hover:bg-black/80 transition-colors rounded-3xl">
            VIEW PROJECTS
          </button>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-background text-foreground border-2 border-foreground font-semibold text-xs sm:text-sm hover:bg-foreground hover:text-background transition-colors rounded-3xl">
            DOWNLOAD CV
          </button>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <Link
            href="#"
            className="p-2 sm:p-3 border-2 rounded-full border-black/20 hover:border-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <Github size={18} className="sm:block" />
          </Link>
          <Link
            href="#"
            className="p-2 sm:p-3 rounded-full border-2 border-black/20 hover:border-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <Linkedin size={18} className="sm:block" />
          </Link>
          <Link
            href="#"
            className="p-2 sm:p-3 border-2 rounded-full border-black/20 hover:border-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <Mail size={18} className="sm:block" />
          </Link>
        </div>
      </div>

      <div className="font-mono absolute bottom-24 md:bottom-32 lg:bottom-38 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-300 tracking-[0.5rem] md:tracking-[1rem] lg:tracking-[3rem] pointer-events-none select-none opacity-40">
        ABBA IS'HAQ
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 sm:bottom-8 animate-bounce">
        <ChevronDown size={28} className="sm:w-8 sm:h-8 text-black/40" />
      </div>
    </header>
  </section>
);

export default Hero;
