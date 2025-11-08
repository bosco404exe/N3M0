"use client";
import { useEffect, useState, useRef } from "react";
import { Terminal } from "@/components/Terminal";

const Projects = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
      
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setShowTerminal(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={`font-mono max-w-7xl mx-auto text-center py-16 lg:py-20 px-4 md:px-8 fade-in-up ${isVisible ? "visible" : ""}`}
        id="projects"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">
          PROJECTS
        </h2>
        <div className="w-16 md:w-24 h-1 bg-green-500 mx-auto mb-4 md:mb-6"></div>
        <p className="text-foreground/70 text-sm md:text-base font-mono mb-6 md:mb-8">
          Ah, the &apos;Projects&apos; section — where I justify my existence.
        </p>
        <p className="text-foreground/60 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-2 mb-6 md:mb-8">
          A collection of my projects showcasing different aspects of modern
          software development, from user interfa---- If you made it here, you&apos;re just looking for confirmation bias and that&apos;s okay. You already know what i can do so why are you checking?
        </p>

        <div className="py-4 md:py-6 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <img
              src="/404.webp"
              alt="404"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-3xl mb-2"
            />
            <p className="text-foreground/40 text-[10px] sm:text-xs font-normal mb-6 md:mb-8">
              image credit: haveibeenpwned
            </p>
            <div className="text-foreground/70 text-xs sm:text-sm md:text-base font-mono text-center space-y-3 sm:space-y-4 max-w-2xl px-2">
              <p className="leading-relaxed">
                Really? You&apos;re still checking? You didn&apos;t end up here by accident… or did you?
              </p>
              <p className="leading-relaxed">
                You must be here for a reason. I&apos;d love to know what it is. There are various ways to contact me below. I&apos;d love to hear from you. Whether by choice or misclick? Don&apos;t worry, The algorithm works in mysterious ways.
              </p>
              <p className="text-xs text-foreground/50 mt-3 sm:mt-4">
                💡 Tip: Press ` (backtick) to open terminal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Modal */}
      {showTerminal && (
        <Terminal onClose={() => setShowTerminal(false)} />
      )}
    </>
  );
};

export default Projects;
