import { RiReactjsLine } from "react-icons/ri"
import { TbBrandTailwind } from "react-icons/tb"
import { SiBootstrap } from "react-icons/si"
import { DiJavascript } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { BiLogoNodejs} from "react-icons/bi";
import { animate, motion } from "framer-motion"

const iconVarients =(duration) => ({
  initial: { y:-10 },
  animate: {
    y: [10, -10],
    transition: {
          duration:duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",

    },
  },
})






const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
    <motion.h1 whileInView={{opacity: 1,  y: 0}}
                initial={{opacity: 0 , y: -100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">
                  Technologies
                </motion.h1>
    <motion.div whileInView={{opacity: 1,  x: 0}}
                initial={{opacity: 0 , x: -100}}
                transition={{duration:1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVarients(2.5)} 
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"
        
        >
         <RiReactjsLine className="text-6xl text-cyan-400 transition-all lg:text-6xl" />
        </motion.div>

        <motion.div variants={iconVarients(3)} 
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" >
         <TbBrandTailwind className="text-6xl text-cyan-600 transition-all lg:text-6xl" />
        </motion.div>

        <motion.div variants={iconVarients(5)} 
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
         <SiBootstrap className="text-6xl text-purple-600 transition-all lg:text-6xl" />
        </motion.div>

        <motion.div variants={iconVarients(2)} 
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
         <DiJavascript className="text-6xl text-orange-600 transition-all lg:text-6xl" />
        </motion.div> 

        <motion.div variants={iconVarients(6)} 
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4  ">
         <FaFigma className="text-6xl transition-all lg:text-6xl" />
        </motion.div>
        
        <motion.div variants={iconVarients(4)} 
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4  ">
         <BiLogoNodejs className="text-6xl text-green-500 transition-all lg:text-6xl" />
        </motion.div>  
        
    </motion.div>
    </div>

  )
}

export default Technologies