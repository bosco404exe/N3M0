
const Projects = () => {
  return (
    <section
      className="font-mono max-w-7xl mx-auto text-center py-32 lg:py-46 px-4 md:px-8"
      id="projects"
    >
      <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">
        PROJECTS
      </h2>
      <div className="w-16 md:w-24 h-1 bg-green-500 mx-auto mb-6 md:mb-8"></div>
      <p className="text-foreground/60 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-2">
        A collection of my projects showcasing different aspects of modern
        software development, from user interfaces to backend architecture.
      </p>

      <div className="py-6 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <img
            src="/404.webp"
            alt="404"
            className="max-w-md w-full h-auto rounded-3xl mb-6 md:mb-8"
          />
          <p className="text-foreground/70 text-sm md:text-base font-mono text-center">
            You know why you are here else you wont be here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
