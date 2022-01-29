import Layout from "../components/Layout";
import { AboutMe, TechStack, Experience } from "../components/Home";

export default function Home() {
  const pageTitle = "Shivaansh Agarwal";
  return (
    <Layout title={pageTitle}>
      <AboutMe />
      <TechStack />
      <Experience />
    </Layout>
  );
}
