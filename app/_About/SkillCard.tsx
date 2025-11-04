interface SkillCardProps {
  icon: string;
  title: string;
  tech: string;
  description: string;
}

const SkillCard = ({ icon, title, tech, description }: SkillCardProps) => (
  <div className="border border-gray-300 p-4 md:p-6 text-center rounded-3xl">
    <div className="text-2xl md:text-3xl font-mono mb-3 text-gray-800">
      {icon}
    </div>
    <h3 className="font-mono font-bold text-xs md:text-sm mb-2 tracking-wider">
      {title}
    </h3>
    <p className="font-mono text-xs text-gray-600 mb-3">{tech}</p>
    <p className="font-mono text-xs text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export default SkillCard;
