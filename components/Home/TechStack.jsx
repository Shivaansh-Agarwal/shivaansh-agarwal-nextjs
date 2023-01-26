import { LayoutSection } from "./LayoutSection.jsx";
import { TechSkillsList } from "./TechSkillsList";

const frontendSkillsList = [
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
  }
];

const backendSkillsList = [
  {
    skill: 'NodeJS',
    icon: '/images/icon-nodejs.png',
  },
  {
    skill: 'NestJS',
    icon: '/images/icon-nestjs.png',
  },
  {
    skill: 'MongoDB',
    icon: '/images/icon-mongodb.svg',
  },
  {
    skill: 'Redis',
    icon: '/images/icon-redis.svg',
  },
  {
    skill: 'RabbitMQ',
    icon: '/images/icon-rabbitmq.svg',
  }
]

export const TechStack = () => {
  return (
    <LayoutSection sectionHeading="Tech Stack">
      <div className="flex flex-col gap-y-2">
      <TechSkillsList skillsList={frontendSkillsList}/>
      <TechSkillsList skillsList={backendSkillsList}/>
      </div>
    </LayoutSection>
  );
};
