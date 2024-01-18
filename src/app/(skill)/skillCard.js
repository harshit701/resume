const SkillCard = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="text-3xl">{skill.icon}</div>
      <label>{skill.title}</label>
    </div>
  );
};

export default SkillCard;
