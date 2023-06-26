import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles'; 
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard =  ({index, title, icon, content, }) => {
  return (
    <Tilt className="xs:w-[200px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75 )}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale:1,
            speed:450
          }}
          className=" bg-tertiary rounded-[20px] py-5 px-10 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className=" text-white text-[15px] font-bold text-center">{title}</h3>
          <h5 className=' flex flex-col text=[10px] text-center'>{content}</h5>
        </div>
      </motion.div>
      </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className=" mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
        I&#39;m a Software developer proficient in JavaScript and frameworks such as React, Astro, Node.js and Three.js.  During my experience collaborating with partners and partners to create efficient, scalable, and easy-to-use solutions. With this in mind, I can help you to bring your ideas to life!
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");