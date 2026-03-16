import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ProjectCard from "./ProjectCard"
import type { Project } from "../../types/project"
import { getProjects } from "../../services/projectService"
import { useSearch } from "../../hooks/useSearch"

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const { search } = useSearch()

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjects()
        setProjects(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <section className="mt-40 overflow-hidden ">

      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.9 }}
        className="mb-8 flex justify-center"
      >
        <Link
          to="/projects"
          className="border border-[#00fd7a] mb-4 text-white rounded-full px-6 py-2 hover:bg-[#00fd7a] hover:text-black transition-colors duration-300"
        >
          My Portfolio
        </Link>
      </motion.div>

     
      <div className="max-w-360 mx-auto px-6 grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-400 col-span-2">
          No projects found
        </p>
      )}
    </section>
  )
}

export default FeaturedProjects