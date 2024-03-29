import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin} from "react-icons/sl";
import { SiMedium } from "react-icons/si";

const Footer = () =>{
    return(
        <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
<a href="https://www.linkedin.com/in/mfahad710/" target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://github.com/MFahad150" target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://medium.com/@mfahad1667" target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SiMedium />
          </span>
        </a>
        </div>
    );
}
export default Footer;