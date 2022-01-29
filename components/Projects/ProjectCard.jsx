import Image from "next/image";
export const ProjectCard = ({ project }) => {
  const {
    name,
    description,
    imgSrc,
    techStack,
    liveLink,
    codeFrontend,
    codeBackend,
  } = project;
  return (
    <div className="flex flex-col gap-6 border bg-white p-4 shadow-xl">
      <div className="flex flex-col gap-2 sm:flex-row">
        <section className="flex flex-col justify-start gap-4 sm:w-2/3 ml-4 ">
          <div className="text-xl font-medium text-gray-700">{name}</div>
          <div>{description}</div>
          <div>
            <span className="font-medium">Tech Stack:</span>
            {techStack.join(", ")}
          </div>
        </section>
        <section className="w-full text-center sm:w-1/3 shadow-sm">
          <Image src={imgSrc} alt={name} width={260} height={150} />
        </section>
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <a
          href={liveLink}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white border rounded-md w-fit"
          target="_blank"
          rel="noreferrer"
        >
          See Live
        </a>
        <div className="flex gap-1">
          <a
            href={codeFrontend}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white border rounded-md w-fit text-center"
            target="_blank"
            rel="noreferrer"
          >
            Source Code (Frontend)
          </a>
          {codeBackend && (
            <a
              href={codeBackend}
              className="px-4 py-2 text-sky-600 border border-sky-600 hover:text-sky-700 hover:border-sky-700 rounded-md w-fit text-center"
              target="_blank"
              rel="noreferrer"
            >
              Source Code (Backend)
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
