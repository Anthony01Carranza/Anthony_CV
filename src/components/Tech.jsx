
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant} from '../utils/motion';

const Tech = () => {
  return (
    <>
    <motion.div
     variants={fadeIn("right", "spring", 0.75 )}
    >
    <div className="flex flex-row flex-wrap justify-center gap-10 justify-items-center  ">
      {technologies.map((technology) => (
          <div className=" bg-tertiary rounded-full w-28 h-28 border-double border-4 border-sky-500 bg-indigo-950 " key={technology.name}>
         <img className=" w-36 h-35 hover:origin-bottom hover:rotate-45 ... transition duration-500 "  src={technology.icon} />
        </div>
      ))}
    </div>
    </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, "");