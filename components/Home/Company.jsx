import Image from "next/image";
import { Designation } from "./Designation.jsx";
import {
  getDurationLength,
  getDurationString,
} from "../../utilities/utility.js";
import { FcCollapse, FcExpand } from "react-icons/fc";
import { useState } from "react";

export const Company = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    companyLogo,
    companyName,
    startDate,
    endDate,
    location,
    designations,
  } = experience;
  const { years, months } = getDurationLength(startDate, endDate);
  const durationString = getDurationString(startDate, endDate);
  return (
    <section className="border-b p-4 my-4 w-full">
      <div className="flex relative">
        <div>
          <Image
            src={companyLogo}
            alt="CompanyLogo"
            className="h-16 w-16"
            width={50}
            height={50}
          />
        </div>
        <div className="ml-4">
          <div className="text-gray-900 font-semibold text-lg">
            {companyName}
          </div>
          {!isExpanded && (
            <div className="text-pink-900 animate-pulse">
              {designations[0].designation}
            </div>
          )}
          <div className="text-gray-500 font-light">{`${durationString} (${
            years !== 0 ? `${years} yr` : ""
          } ${months !== 0 ? `${months} mos` : ""})`}</div>
          <div className="text-gray-500 font-light">{location}</div>
        </div>
        <button
          className="absolute right-0"
          onClick={() => {
            setIsExpanded((isExpanded) => !isExpanded);
          }}
        >
          {isExpanded ? (
            <FcExpand />
          ) : (
            <FcCollapse className="transform rotate-90" />
          )}
        </button>
      </div>
      {isExpanded &&
        designations.map((designation, index) => {
          return <Designation key={index} position={designation} />;
        })}
    </section>
  );
};
