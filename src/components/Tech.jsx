
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant} from '../utils/motion';
import { styles } from '../styles'; 

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <h2 className={styles.sectionHeadText} >Programming Languages.</h2>
    </motion.div>

    <motion.div
     variants={fadeIn("right", "spring", 0.75 )}
    >
      
      
    <div className="flex mt-20 flex-row flex-wrap justify-center gap-10 justify-items-center   ">
      {technologies.map((technology) => (
          <div className=" bg-tertiary rounded-lg w-28 h-36 border-double border-4 border-sky-500 lg:hover:scale-105 transition ease-in-out delay-50 duration-300 " key={technology.name}>
         <img className=" w-36 h-35 transition duration-500 "  src={technology.icon} />
         <p className="mt-2 text-secondary text-[14px] text-center ">{technology.name}</p>
        </div>
      ))}
    </div>
    </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, "");