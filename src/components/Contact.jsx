import { CONTACT } from "../constants"
import address from "../assets/location-24.png"
import contact from "../assets/phone-30-24.png"
import email from "../assets/email-12-24.png"
import contactQR from "../assets/phone3.png"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b rounded-md border-neutral-900 ">


<h1 className="my-10 text-center text-4xl">Get In Touch</h1>   

<footer class=" ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0 flex items-center">
              
                  <img src={contactQR} class="h-32 me-5" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Send a DM to me..!</span>
              
          </div>
          <div class="flex justify-end items-end">
              
              <div class="flex justify-center items-center mb-5">
        <motion.div whileInView={{opacity: 1,  x: 0}}
                    initial={{opacity: 0 , x: -100}}
                    transition={{duration:1}}
                    className=" my-4 text-center tracking-tighter ">
        <img className="flex absolute bg-purple-900 rounded-full p-1  " src={address} alt="" srcset=""   /><p className="text-xs lg:text-sm ml-10">{CONTACT.address}</p><br />
        <img className="flex absolute  bg-purple-900 rounded-full p-1" src={email} alt="" srcset=""   /><p className="text-xs lg:text-sm ml-5">{CONTACT.email}</p><br />
        <img className="flex absolute  bg-purple-900 rounded-full p-1" src={contact} alt="" srcset=""   /><p className="text-xs lg:text-sm ml-0">{CONTACT.phoneNo}</p>
     </motion.div>
     </div>
            
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 DASUN KASHYAPA BANDARA. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>







        {/* <h1 className="my-10 text-center text-4xl">Get In Touch</h1>
        <div class="flex justify-center items-center mb-5">
        <motion.div whileInView={{opacity: 1,  x: 0}}
                    initial={{opacity: 0 , x: -100}}
                    transition={{duration:1}}
                    className=" my-4 text-center tracking-tighter ">
        <img className="flex absolute bg-purple-900 rounded-full p-1  " src={address} alt="" srcset=""   /><p className="text-xs lg:text-sm ml-10">{CONTACT.address}</p><br />
        <img className="flex absolute  bg-purple-900 rounded-full p-1" src={email} alt="" srcset=""   /><p className="text-xs lg:text-sm ml-5">{CONTACT.email}</p><br />
        <img className="flex absolute  bg-purple-900 rounded-full p-1" src={contact} alt="" srcset=""   /><p className="text-xs lg:text-sm ml-0">{CONTACT.phoneNo}</p>
     </motion.div>
     </div>
           
        <div className="flex justify-center items-center">
        
            <img className="p-2 " src={contactQR} alt="" width="150px" height="150px" srcset="" />
        </div> */}
        
    </div>
  )
}

export default Contact