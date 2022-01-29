import Image from "next/image";

export const SocialMediaBar = () => {
  const socialMediaDetailsList = [
    {
      url: "https://github.com/Shivaansh-Agarwal",
      src: "/images/icon-github.svg",
      alt: "Github",
    },
    {
      url: "https://www.linkedin.com/in/shivaansh-agarwal/",
      src: "/images/icon-linkedin.svg",
      alt: "Linkedin",
    },
    {
      url: "https://twitter.com/Shivansh_97",
      src: "/images/icon-twitter.svg",
      alt: "Twitter",
    },
  ];
  return (
    <div className="flex flex-row justify-evenly pt-5 w-40">
      {socialMediaDetailsList.map((item) => {
        const { url, src, alt } = item;
        return (
          <a href={url} target="_blank" rel="noreferrer" key={alt}>
            <Image
              src={src}
              alt={alt}
              className="w-8 h-8 sm:w-10 sm:h-10"
              width={30}
              height={30}
            />
          </a>
        );
      })}
    </div>
  );
};
