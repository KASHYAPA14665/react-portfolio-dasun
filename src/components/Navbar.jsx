
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { GoMail } from "react-icons/go";


const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-6">
        <div className="flex relative flex-shrink-0 items-center">
            <a href="#"><h2 className="font-bold mx-2 text-3xl ">Portfolio</h2></a>
        </div>
        <div className="flex  p-2 items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/dasun-kashyapa-a554a71a4/"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><GoMail /></a>
        </div>
        
    </nav>
  )
}

export default Navbar