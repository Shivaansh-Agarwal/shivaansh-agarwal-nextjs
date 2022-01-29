import Head from "next/head";
import { Header } from "./Header.jsx";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Shivaansh Agarwal | Software Engineer | Frontend | Javascript | ReactJS"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/website-logo.png" />
      </Head>
      <div>
        <Header />
        <main className="w-11/12 sm:10/12 md:w-9/12 lg:w-8/12 xl:px-48 2xl:px-60 mx-auto mt-24">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
