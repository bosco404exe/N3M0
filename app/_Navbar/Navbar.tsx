"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setOpen] = useState(false);

  const navItems = ["About", "Projects", "Contact"];

  const handleNavClick = (id: string) => {
    setActive(id);
    setOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // SECTION IS AT LEAST 50% VISIBLE
      }
    );

    sections.forEach((section) => observer.observe(section));
    const handleScrollTop = () => {
      if (window.scrollY < window.innerHeight * 0.2) {
        setActive("home");
      }
    };

    window.addEventListener("scroll", handleScrollTop);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-10 w-full max-w-xs font-mono md:max-w-2xl lg:max-w-3xl z-50">
        <div className="px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-6 flex justify-between backdrop-blur-sm items-center border border-foreground/10 rounded-full">
          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <button
              className="text-sm md:text-md lg:text-lg text-foreground hover:cursor-pointer"
              onClick={() => handleNavClick("home")}
            >
              BOSCO.DEV
            </button>
          </div>

          <div className="hidden md:flex gap-7">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`text-xs font-semibold tracking-wide transition-all ${
                  active === item.toLowerCase()
                    ? "text-foreground border-b-2 border-teal-500"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={() => setOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-black/5 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden backdrop-blur-sm">
            <div className="px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    handleNavClick(item.toLowerCase());
                    setOpen(false);
                  }}
                  className={`block w-full text-left text-sm font-semibold tracking-wide py-2 transition-all ${
                    active === item.toLowerCase()
                      ? "text-foreground border-b-2 border-teal-500 pl-3"
                      : "text-foreground/60 hover:text-foreground pl-2"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
