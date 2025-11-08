import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { url: "https://github.com/bosco", label: "Github", icon: Github },
  {
    url: "https://linkedin.com/in/abba-is-haq-b14579321",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { url: "mailto:bosco.dev@gmail.com", label: "Mail", icon: Mail },
];

const Hero = () => (
  <section id="home" className="relative min-h-screen">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
        backgroundColor: "var(--grid-bg)",
        backgroundSize: "50px 50px",
      }}
    ></div>
    <header className="relative z-10 pt-24 sm:pt-28 md:pt-32 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="font-mono max-w-2xl w-full">
        <h1 className="text-4xl text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-2 sm:mb-4">
          BOSCO.DEV
        </h1>

        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-32 sm:w-40 md:w-48 h-1 bg-foreground"></div>
        </div>

        <p className="text-center text-xs sm:text-sm md:text-base text-foreground/60 tracking-widest mb-6 sm:mb-8">
          &gt; CYBERSECURITY SPECIALIST & TECH ENTHUSIAST
        </p>

        <div className="text-center mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed text-foreground/70">
          <p>
            Hi, my name is{" "}
            <span className="bg-foreground text-sm text-background px-2 py-1 inline-block rounded-2xl">
              Clinton Omotoiynbo
            </span>{" "}
            — I am a cybersecurity specialist and tech enthusiast who thrives on
            the dual nature of creation and deconstruction. Driven by an insatiable
            curiosity for information and technology, I&apos;m constantly exploring
            the boundaries between building secure systems and understanding how
            they can be broken. Whether it&apos;s securing networks, developing
            applications, or leading projects, I approach every challenge with
            the mindset of someone who loves to create solutions and understand
            their vulnerabilities—because that&apos;s what got me into tech in
            the first place.
          </p>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-foreground text-background font-semibold text-xs sm:text-sm hover:bg-foreground/70 hover:cursor-pointer transition-colors duration-150 rounded-3xl">
            VIEW PROJECTS
          </button>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-background text-foreground border-2 border-foreground font-semibold text-xs sm:text-sm hover:bg-foreground hover:cursor-pointer hover:text-background transition-colors duration-150 rounded-3xl">
            DOWNLOAD CV
          </button>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          {socials.map(({ url, label, icon: Icon }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 border-2 rounded-full border-foreground/20 hover:border-foreground transition-colors duration-150 hover:bg-foreground hover:text-background"
              aria-label={label}
            >
              <Icon size={18} className="sm:block" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-18 md:bottom-24 lg:bottom-28 text-foreground/40 pointer-events-none select-none opacity-40"></div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 sm:bottom-8 animate-bounce">
        <a href="#about">
          <ChevronDown size={28} className="sm:w-8 sm:h-8 text-foreground/40" />
        </a>
      </div>
    </header>
  </section>
);

export default Hero;
