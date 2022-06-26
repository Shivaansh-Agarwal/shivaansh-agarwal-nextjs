import Image from "next/image";

export const TechSkillsList = () => {
  const techList = [
    {
      skill: "ReactJS",
      icon: "/images/icon-reactjs.svg",
    },
    {
      skill: "Redux",
      icon: "/images/icon-redux.png",
    },
    {
      skill: "Javascript",
      icon: "/images/icon-javascript.png",
    },
    {
      skill: "Next.js",
      icon: "/images/icon-nextjs.svg",
    },
    {
      skill: "HTML5",
      icon: "/images/icon-html.png",
    },
    {
      skill: "CSS3",
      icon: "/images/icon-css.png",
    },
    {
      skill: "TailwindCSS",
      icon: "/images/icon-tailwindcss.svg",
    },
    {
      skill: "MUI",
      icon: "/images/icon-mui.png",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap justify-center sm:justify-start">
      {techList.map((item) => {
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
