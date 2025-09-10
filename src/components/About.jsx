import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { about } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Button from "./Button";

const About = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40' style={{ marginBottom: 430 }}>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>About</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        <p className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8`}>
          I’m Marco Pineda, a Full Stack Software Consultant and builder with a passion for creating innovative digital solutions.
          With experience across full-stack development, cloud infrastructure, and AI-driven applications, I enjoy turning complex ideas into simple, effective products.
          Outside of work, I’m always exploring new projects, learning new technologies, and finding ways to blend creativity with technology.
          When I’m not at the keyboard, you’ll can find me at the gym, hiking, hunting, fishing, or camping—anything that gets me outdoors
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
