import Image from "next/image";
import { SocialMediaBar } from "./SocialMediaBar";
import Link from "next/link";

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
          I&apos;m a Software Engineer based in India, specializing in frontend
          web development currently working at{" "}
          <Link href="https://www.etmoney.com">
            <a className="text-blue-600">ETMoney</a>
          </Link>
          &nbsp;Gurgaon, one of India&apos;s leading fintech startup.
          <br /><br />
          Prior to this I&apos;ve experience working at leading Indian startups
          and global MNCs, like{" "}
          <Link href="https://mygate.com/">
            <a className="text-blue-600">MyGate</a>
          </Link>{" "}
          Bangalore and{" "}
          <Link href="https://www.kony.com/index.html">
            <a className="text-blue-600">Kony India Pvt. Ltd.</a>
          </Link>{" "}
          Hyderabad.
          <br /><br />
          In my spare time, I enjoy exploring areas like personal finance,
          investing.
        </p>
      </div>
    </section>
  );
};
