import { HERO_CONTENT } from "../constants"
import ProfilePic from "../assets/ddd.png"
import { motion } from "framer-motion"

const container = (delay)=> ({
    hidden :{ x: -100, opacity: 0},
    visible :{x: 0,opacity: 1 ,
    transition: {duration:0.5, delay: delay},

},
});

const container2 = (delay)=> ({
    hidden :{ x: 100, opacity: 0},
    visible :{x: 0,opacity: 1 ,
    transition: {duration:0.5, delay: 1.5},

},
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap-reverse">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                variants={container(0)} 
                initial="hidden"
                animate="visible"
                
                className="mt-10 pb-16 font-thin tracking-tight lg:mt-20 lg:text-6xl">Dasun Kashyapa</motion.h1>
                <motion.span  variants={container(0.5)} 
                initial="hidden"
                animate="visible"
                 className="bg-gradient-to-r from-pink-300 via-slate-500 text-center
                to-purple-500 bg-clip-text tracking-tight text-transparent text-3xl">
                    FrontEnd Developer
                </motion.span>
                <motion.p variants={container(1)} 
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-start">{HERO_CONTENT}</motion.p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 flex justify-center ">
                <div className="flex justify-center  ">
                    <motion.img variants={container2(0)} 
                initial="hidden"
                animate="visible"
                className="rounded-full lg:max-w-xs" src={ProfilePic} alt="my-img" ></motion.img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero