"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setOpen] = useState(false);

  const navItems = ["About", "Experiences", "Projects", "Contact"];

  return (
    <>
      <nav className="fixed top-10 w-full max-w-xs font-mono md:max-w-2xl lg:max-w-3xl bg-transparent/30 z-50">
        <div className="px-8 py-6 flex justify-between items-center border border-black/10 rounded-full">
          <h1 className="text-xl text-foreground">ABSTERR.DEV</h1>

          <div className="hidden md:flex gap-7">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item.toLowerCase())}
                className={`text-xs font-semibold tracking-wide transition-all ${
                  active === item.toLowerCase()
                    ? "text-black border-b-2 border-teal-500"
                    : "text-black/60 hover:text-black"
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
          <div className="md:hidden border-t border-black/10 bg-white/95">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item.toLowerCase());
                    setOpen(false);
                  }}
                  className={`block w-full text-left text-sm font-semibold tracking-wide py-2 transition-all ${
                    active === item.toLowerCase()
                      ? "text-black border-l-2 border-teal-500 pl-3"
                      : "text-black/60 hover:text-black pl-2"
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
