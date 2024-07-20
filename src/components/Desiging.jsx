import { motion } from "framer-motion"
import design1 from "../assets/crypto.png"
import design2 from "../assets/iphon.png"
const Desiging = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
<motion.h1 whileInView={{opacity: 1,  y: 0}}
                initial={{opacity: 0 , y: -100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">Ui/Ux Design</motion.h1>

<motion.section whileInView={{opacity: 1,  x: 0}}
                    initial={{opacity: 0 , x: -100}}
                    transition={{duration:1}}
                >
  <div class="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2 mb-10">
    <div class="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 items-center sm:grid-cols-2">
      <div class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-lg m-0"><img src={design1} alt="Revolutionizing Our Production Process" class="object-cover w-full h-full " /></div>
      <div class="p-6 px-2 sm:pr-6 sm:pl-4 ">
        <p class="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">Figma Design 01</p><a href="https://www.figma.com/design/lxKo3j8cCEsk9qTtLKMsXZ/Figma-Design--01?node-id=0-1&t=0J1zUiSsQEHauNTi-1" class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-blue-600"><u>Go To The Design File </u></a>
        <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">NFT marketplace web site, users are greeted with a clean, modern interface designed to highlight featured collections.</p>
      </div>
    </div>


    <div class="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 items-center sm:grid-cols-2">
      <div class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-lg m-0"><img src={design2} alt="Revolutionizing Our Production Process" class="object-cover w-full h-full " /></div>
      <div class="p-6 px-2 sm:pr-6 sm:pl-4 ">
        <p class="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">Figma Design 02</p>
        <a href="https://www.figma.com/design/hNKeDnhwkJg3YmTAORRECv/mobile-app-test1?node-id=10-11&t=O2uC12GeWAbDnYLI-1" class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-blue-600"><u>Go To The Design File </u></a>
        <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">iphone 15 pro max UI design.</p>
      </div>
    </div>

  </div>
</motion.section>
    </div>
  )
}

export default Desiging