import Image from "next/image";

export const TechSkillsList = ({ skillsList }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-y-2 sm:justify-start">
      {skillsList.map((item) => {
        const { skill, icon } = item;
        return <Skill key={skill} icon={icon} skill={skill} />;
      })}
    </div>
  );
};

const Skill = ({ icon, skill }) => {
  return (
    <div className="mr-4 flex flex-col items-center">
      <div>
        <Image
          src={icon}
          alt={skill}
          className="h-20 w-20"
          width={60}
          height={60}
        />
      </div>
      <div>{skill}</div>
    </div>
  );
};
