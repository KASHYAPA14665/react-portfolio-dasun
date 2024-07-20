import { PROJECTS } from "../constants"
import Technologies from "./Technologies"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
        <motion.h1 whileInView={{opacity: 1,  y: 0}}
                initial={{opacity: 0 , y: -100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">Projects</motion.h1>
        <div>
            {PROJECTS.map((pro, index) =>(
              <div key={index} className="mb-8 flex flex-wrap items-center justify-center lg:justify-center">
                <motion.div 
                    whileInView={{opacity: 1,  x: 0}}
                    initial={{opacity: 0 , x: -100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/3">
                <img className="mb-6 rounded " src={pro.image} alt="" width="250px" height="250px" srcset="" />
                </motion.div>
                <motion.div 
                    whileInView={{opacity: 1,  x: 0}}
                    initial={{opacity: 0 , x: 100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                 <h6 className="mb-2 text-sm font-semibold ">{pro.title}</h6>
                 <p className="mb-4 text-sm text-neutral-400">{pro.description}</p>
                 <a href="https://github.com/KASHYAPA14665/sri-lanka-tourism.git"><p className="mb-4 text-sm text-blue-600"><u>{pro.gitlink}</u></p></a>
                 {pro.technologies.map((tech, index)=>(
                    <span className="mr-2 rounded bg-neutral-900 text-purple-600 text-sm px-2 py-1 " key={index}>{tech}</span>
                 ))}
                </motion.div>
              </div>
            ))}
        </div>

    </div>
  )
}

export default Projects