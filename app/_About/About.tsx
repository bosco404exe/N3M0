import SkillCard from "./SkillCard";

const About = () => {
  const skills = [
    {
      icon: "<>",
      title: "FRONTEND",
      tech: "Typescript, React, Next.js, Tailwind CSS",
      description: "Building responsive and interactive user interfaces",
    },
    {
      icon: "≡",
      title: "BACKEND",
      tech: "Node.js, Express.js, Bun, Hono, PostreSQL",
      description: "Scalable server-side applications and APIs",
    },
    {
      icon: "□",
      title: "MOBILE APPLICATIONS",
      tech: "ReactNative, Expo",
      description:
        "Building beautiful mobile experiences with native performance",
    },
    {
      icon: "◯",
      title: "DEPLOYMENT",
      tech: "Vercel, CI/CD, Github, Render",
      description: "Automated deployment and cloud infrastructure",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-wider mb-4">
          ABOUT
        </h1>
        <div className="w-16 md:w-24 h-1 bg-green-500 mx-auto mb-6 md:mb-8"></div>
        <p className="font-mono text-xs md:text-sm leading-relaxed max-w-2xl mx-auto text-gray-700 px-2">
          I'm a passionate software developer with a love for creating digital
          experiences that matter. My journey in tech started with curiosity and
          has evolved into a commitment to building softwares and solutions that
          bridge creativity and functionality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>

      <div className="bg-foreground text-background rounded-3xl p-4 md:p-6 max-w-2xl mx-auto">
        <p className="font-mono text-xs md:text-sm mb-3">
          <span className="text-green-400">&gt;</span> CURRENT STATUS:{" "}
          <span className="text-green-400 font-bold">
            AVAILABLE FOR PROJECTS
          </span>
        </p>
        <p className="font-mono text-xs md:text-sm text-gray-300">
          Ready to collaborate on your next big idea
        </p>
      </div>
    </section>
  );
};

export default About;
