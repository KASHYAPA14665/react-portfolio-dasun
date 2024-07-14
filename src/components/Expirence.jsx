import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"
const Expirence = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity: 1,  y: 0}}
        initial={{opacity: 0 , y: -100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Experience </motion.h1>
        <div>
            {EXPERIENCES.map((experience, index)=> (
                <div key={index} className="mb-8 flex flex-wrap justify-center lg:justify-center">
                    <motion.div 
                    whileInView={{opacity: 1,  x: 0}}
                    initial={{opacity: 0 , x: -100}}
                    transition={{duration:0.5, delay:1}}
                    className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400 ">{experience.year}</p>
                    </motion.div>
                    <div className="w-full max-w-xl lg:w-3/4 lg:justify-center">
                    <motion.h6 
                    whileInView={{opacity: 1,  y: 0}}
                    initial={{opacity: 0 , y: 0}}
                    transition={{duration:1}}
                    className="mb-2 font-semibold">{experience.role} - <span className="text-cyan-700">{experience.company}</span></motion.h6>
                    <motion.p 
                    whileInView={{opacity: 1,  y: 0}}
                    initial={{opacity: 0 , y: 0}}
                    transition={{duration:1, delay:0.45}}
                    className="text-sm mb-4 text-neutral-400">{experience.description}</motion.p>
                    {experience.technologies.map((tech, index)=>(
                       
                    <motion.span 
                    whileInView={{opacity: 1,  x: 0}}
                    initial={{opacity: 0 , x: -100}}
                    transition={{duration:1, delay:0.45}}
                    className="mr-2 mt-4 mb-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium  text-purple-600" key={index}>{tech}</motion.span>
                       
                    ))}
                    </div>  
                </div>
            ))}
        </div>
    </div>
  )
}

export default Expirence