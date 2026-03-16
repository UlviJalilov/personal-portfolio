import type { Project } from "../../types/project"
import { FaGithub } from "react-icons/fa";
type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="bg-[#111] rounded-xl overflow-hidden border border-gray-800 hover:border-green-400 transition-all duration-300 group">


      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-55 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>


      <div className="p-5 space-y-3">


        <h3 className="text-xl font-semibold text-white">{project.title}</h3>


        <p className="text-gray-400 text-sm">{project.description}</p>


        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          <a
            href={project.github}
            target="_blank"
            className="border border-white text-white p-2 rounded-full"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={project.live}
            target="_blank"
            className="bg-[#00fd7a] items-center flex text-black text-sm px-4 py-1.5 rounded-2xl"
          >
            Live Demo
          </a>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard