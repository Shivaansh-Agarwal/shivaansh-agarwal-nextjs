import { useState } from "react";
import {
  getDurationLength,
  getDurationString,
} from "../../utilities/utility.js";
import { Markdown } from "./Markdown.jsx";

export const Designation = ({ position }) => {
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true);
  function handleDescriptionCollapse() {
    setIsDescriptionCollapsed(
      (isDescriptionCollapsed) => !isDescriptionCollapsed
    );
  }
  const { designation, employmentType, startDate, endDate, description } =
    position;
  const { years, months } = getDurationLength(startDate, endDate);
  const durationString = getDurationString(startDate, endDate);
  const descriptionToDisplay = isDescriptionCollapsed
    ? description.substr(0, 150)
    : description;
  const isBtnVisible = description.length < 150 ? false : true;
  const btnText = isDescriptionCollapsed ? "...read more" : "...read less";
  return (
    <section className="my-4 ml-8 pl-12 border-l-4 border-pink-100">
      <div>
        <div className="text-gray-600 font-bold">{designation}</div>
        <div className="text-gray-600 font-light">{employmentType}</div>
        <div className="text-gray-500 font-light mb-2">{`${durationString} (${
          years !== 0 ? `${years} yr ` : ""
        }${months !== 0 ? `${months} mos` : ""})`}</div>
        <div className="relative">
          <Markdown markdown={descriptionToDisplay} />
          {isBtnVisible && (
            <button
              onClick={handleDescriptionCollapse}
              className="absolute bottom-0 right-0 text-sm text-gray-500 bg-white w-20"
            >
              {btnText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
