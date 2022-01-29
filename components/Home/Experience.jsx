import { LayoutSection } from "./LayoutSection.jsx";
import { Company } from "./Company.jsx";
import experienceData from "../../utilities/experience.js";

export const Experience = () => {
  return (
    <LayoutSection sectionHeading="Experience">
      {experienceData.map((experience) => {
        const { id } = experience;
        return <Company key={id} experience={experience} />;
      })}
    </LayoutSection>
  );
};
