import { useState } from "react";

export const ProjectCard = ({ project }) => {
  const [isCursorOnCard, setIsCursonOnCard] = useState(false);
  const {
    name,
    description,
    techStack,
    liveLink,
    codeFrontend,
    codeBackend,
    tags,
  } = project;
  const isWebApp = tags.includes("webapp");
  return (
    <div
      className={`flex flex-col gap-4 justify-between border rounded bg-white p-4 shadow-xl hover:ring ring-offset-2 ${
        isWebApp
          ? "bg-lime-50 ring-lime-900/50 ring-offset-lime-100"
          : "bg-fuchsia-50 ring-fuchsia-900/50 ring-offset-fuchsia-100"
      }`}
      onMouseEnter={() => {
        setIsCursonOnCard(true);
      }}
      onMouseLeave={() => {
        setIsCursonOnCard(false);
      }}
    >
      <div>
        <a
          className={`text-xl ${
            isCursorOnCard
              ? isWebApp
                ? "text-lime-700 font-bold"
                : "text-fuchsia-700 font-bold"
              : "text-gray-900 font-medium"
          } `}
          href={liveLink}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
        <div className="mt-4 text-base text-gray-600">{description}</div>
        <div className="mt-2 text-base">
          <span className="font-medium text-gray-700">Tech Stack: </span>
          {techStack.join(", ")}
        </div>
        <div className="mt-1 text-base text-blue-900 text-right">
          {tags.map((tag) => `#${tag}`).join(", ")}
        </div>
      </div>
      <ProjectCardButtons
        liveLink={liveLink}
        codeFrontend={codeFrontend}
        codeBackend={codeBackend}
      />
    </div>
  );
};

const ProjectCardButtons = ({ liveLink, codeFrontend, codeBackend }) => {
  return (
    <div className="flex flex-wrap gap-1 items-center">
      <CustomLinkButton url={liveLink} linkType="liveLink" linkText="Live" />
      <CustomLinkButton
        url={codeFrontend}
        linkType="sourceCodeFrontend"
        linkText="Frontend Code"
      />
      {codeBackend && (
        <CustomLinkButton
          url={codeBackend}
          linkType="sourceCodeBackend"
          linkText="Backend Code"
        />
      )}
    </div>
  );
};

const CustomLinkButton = ({ url, linkType, linkText }) => {
  const linkStyles = {
    liveLink:
      "px-4 py-2 text-center border rounded-md w-fit bg-red-600 text-white hover:bg-red-700 animate-pulse",
    sourceCodeFrontend:
      "px-4 py-2 text-center border rounded-md w-fit bg-sky-600 text-white hover:bg-sky-700",
    sourceCodeBackend:
      "px-4 py-2 text-center border rounded-md w-fit bg-white text-sky-600 border-sky-600 hover:bg-sky-50",
  };
  return (
    <a
      href={url}
      className={linkStyles[linkType]}
      target="_blank"
      rel="noreferrer"
    >
      {linkText}
    </a>
  );
};
