import About from "./_About";
import Contact from "./_Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Page = () => {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="flex justify-center">
        <Navbar />
      </div>

      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
};

export default Page;
