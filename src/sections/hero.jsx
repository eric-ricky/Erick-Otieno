import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

//  custom animations
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Hero = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPlayMarquee(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 lg:pt-52 z-0 " id="home">
      <motion.div variants={banner} className="banner">
        <BannerRowTop title={"Passionate"} />
        <BannerRowCenter title={"Software"} playMarquee={playMarquee} />
        <BannerRowBottom title={"Developer"} />
        <ScrollBtn />
      </motion.div>
    </section>
  );
};

export default Hero;

const AnimatedLetters = ({ title, disabled, styles }) => (
  <motion.span
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
    className={`relative text-[4rem] lg:text-[8rem] font-semibold inline-block whitespace-nowrap -tracking-[0.8rem] lg:mr-48 mr-16`}
  >
    {[...title].map((letter, i) => (
      <motion.span
        key={i}
        variants={disabled ? null : letterAni}
        className={`relative  inline-block  ${styles}`}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => (
  <div className="container mx-auto overflow-hidden flex items-center flex-col lg:flex-row">
    <div className="row-col flex-1">
      <AnimatedLetters
        styles="lg:text-[5rem] text-[2rem] font-normal -tracking-[0rem] lg:-tracking-[0.1rem]"
        title={title}
      />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
      className="row-col w-[40%] hidden lg:flex"
    >
      <span className="row-message font-semibold text-[1.4rem] bg-green-00">
        Hi there 👋, I'm Eric. I'm a passionate fullstack developer based in
        Nairobi, Kenya.
      </span>
    </motion.div>
  </div>
);

const BannerRowBottom = ({ title }) => (
  // <div className="bg-green-00 container mx-auto flex justify-between relative items-center">
  <div className="flex-1 flex justify-center mt-0 ml-[20%]  items-center">
    <AnimatedLetters
      styles="lg:text-[8rem] text-[2.8rem] font-normal -tracking-[0rem] lg:-tracking-[0.8rem] px-1"
      title={title}
    />
    {/* </div> */}
  </div>
);

const BannerRowCenter = ({ title, playMarquee }) => (
  <div
    className={`banner-row relative overflow-hidden ${
      playMarquee && "animate"
    }`}
  >
    <motion.div
      initial={{ y: 310 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      className="w-fit flex animate-marquee ml-[32rem] leading-loose"
    >
      <AnimatedLetters
        styles="lg:text-[12rem] text-[8rem] lg:leading-5 leading-normal font-semibold
whitespace-wrap -tracking-[0.8rem]"
        title={title}
        disabled
      />
      <AnimatedLetters
        styles="lg:text-[12rem] text-[8rem] lg:leading-5 leading-normal font-semibold
whitespace-nowrap -tracking-[0.8rem]"
        title={title}
      />
      <AnimatedLetters
        styles="lg:text-[12rem] text-[8rem] lg:leading-5 leading-normal font-semibold
whitespace-nowrap -tracking-[0.8rem]"
        title={title}
        disabled
      />
      <AnimatedLetters
        styles="lg:text-[12rem] text-[8rem] lg:leading-5 leading-normal font-semibold
whitespace-nowrap -tracking-[0.8rem]"
        title={title}
        disabled
      />
    </motion.div>
  </div>
);

const ScrollBtn = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
    className="flex items-center justify-center"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
      className="bg-white flex items-center justify-center flex-col rounded-full p-8 mt-8 cursor-pointer animate-bounce"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.8,
        }}
      >
        scroll
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.8,
        }}
      >
        down
      </motion.span>
    </motion.div>
  </motion.div>
);
