import  {Tilt}  from "react-tilt";
import { motion } from "framer-motion";

import { styles } from '../styles';
import { github, clip  } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";

 const ProjectCard = ({ index, name, description, tags, image, source_code_link, source_code_Git, }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.55)}>
        <div
          className="bg-tertiary p-5 rounded-2xl sm:w-[340px] md:max-lg:w-[650px] md:max-lg:mx-3 w-full lg:brightness-50 lg:hover:brightness-100 lg:hover:scale-105 transition ease-in-out delay-50 duration-300 "
        >
          <div className="relative w-full h-[230px]">
            <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-2xl"
            />
          
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_Git, "_black")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
              src={github} 
              alt="github" 
              className="w-3/5 h-3/5 object-contain"
              />
              </div>
              <div
              onClick={() => window.open(source_code_link, "_black")}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
              src={clip} 
              alt="lick" 
              className="w-3/5 h-3/5 object-contain"
              />
              </div>
            </div>
            
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
              </p>
            ))}

          </div>
        </div>
      </motion.div>
    )
}


const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        My Work
      </p>
      <h2 className={styles.sectionHeadText}>
        Projects.
      </h2>
    </motion.div>
    
    <div className="w-full flex">
      <motion.p
        variants={fadeIn("right", "spring", 0.50 )}
        className="mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        Following projects showcases my skills and experience through.
        real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7 ">
      {projects.map((project, index) => (
        <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          />
      ))}
    </div>

      </>
  )
}

export default SectionWrapper(Works, "");

