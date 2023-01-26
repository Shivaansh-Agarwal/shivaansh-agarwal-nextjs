import Image from "next/image";
import { SocialMediaBar } from "./SocialMediaBar";

export const AboutMe = () => {
  const age = Math.floor((new Date() - new Date(1998, 5, 9)) / 31536000000);
  return (
    <section className="flex flex-col justify-between sm:flex-row">
      <div className="flex flex-col items-center sm:justify-start">
        <Image
          src="/images/shivaansh.jfif"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full h-40 w-40 sm:h-48 sm:w-48"
        />
        <SocialMediaBar />
      </div>
      <div className="sm:w-3/5 flex flex-col items-center sm:justify-start">
        <h1 className="text-3xl sm:text-4xl pb-2 sm:pb-3">About Me</h1>
        <p className="flex-shrink text-gray-600 w-3/5 text-center sm:w-full">
          Hi I am <strong>Shivaansh Agarwal</strong>, a {age} years old Web
          Developer, currently working at MyGate as a <br/> Software Developer in Bengaluru, India. 
          <br />I did my bachelors in Computer
          Science and Engineering with Specialization in Data Analytics and
          graduated in 2020. <br />I enjoy working on Frontend side of
          Web-development.
        </p>
      </div>
    </section>
  );
};
