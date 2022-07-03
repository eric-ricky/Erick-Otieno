import Head from "next/head";
import About from "../sections/about";
import Contact from "../sections/contact";
import Hero from "../sections/hero";
import Portfolio from "../sections/portfolio";

const Home = () => {
  return (
    <>
      <Head>
        <title>Erick Ricky | Fullstack developer based in Nairobi, Kenya</title>
      </Head>

      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
};

export default Home;
