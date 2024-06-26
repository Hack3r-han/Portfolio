import { BsGithub } from "react-icons/bs";
import { SiCanva } from "react-icons/si"; 

interface Props {
  title: string;
  des: string;
  src: string;
  githubLink: string;
  canvaLink: string;
}

const ProjectCard = ({ title, des, src, githubLink, canvaLink }: Props) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-sky-600 hover:sky-600 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <span className="text-lg w-10 h-10 rounded-full bg-sky-600 inline-flex justify-center items-center text-sky-300 hover:text-designColor duration-300 cursor-pointer">
                  <BsGithub />
                </span>
              </a>
              <a href={canvaLink} target="_blank" rel="noopener noreferrer">
                <span className="text-lg w-10 h-10 rounded-full bg-sky-600 inline-flex justify-center items-center text-sky-300 hover:text-designColor duration-300 cursor-pointer">
                  <SiCanva />
                </span>
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;