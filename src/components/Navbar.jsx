
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { GoMail } from "react-icons/go";


const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-6">
        <div className="flex relative flex-shrink-0 items-center">
            <a href="#"><h2 className="font-bold mx-2 text-3xl hover:text-purple-600 transition-all delay-150">Portfolio</h2></a>
        </div>
        <div className="flex  p-2 items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/dasun-kashyapa-a554a71a4/" className="text-neutral-100 hover:text-purple-600 transition-all delay-150"><FaLinkedin /></a>
            <a href="https://github.com/KASHYAPA14665" className="text-neutral-100hover:text-purple-600 transition-all delay-150 hover:text-purple-600 transition-all delay-150" ><FaGithub /></a>
            <a href="https://www.facebook.com/profile.php?id=100086312091125&mibextid=kFxxJD" className=" text-neutral-100 hover:text-purple-600 transition-all delay-150"><FaFacebook /></a>
            <a href="mailto:dasunkashyapa20@gmail.com" className="text-neutral-100 hover:text-purple-600 transition-all delay-150"><GoMail /></a>
        </div>
        
    </nav>
  )
}

export default Navbar