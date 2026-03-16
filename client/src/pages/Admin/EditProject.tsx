import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API = "http://localhost:5000/api/projects";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
}

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project>({
    id: 0,
    title: "",
    description: "",
    technologies: [],
    github: "",
    live: "",
    image: "",
  });

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`${API}`);
      const data = await res.json();

      const found = data.find((p: Project) => p.id === Number(id));

      if (found) setProject(found);
    };

    fetchProject();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    toast.success("Project updated successfully");

    navigate("/admin/dashboard");
  };

  return (
    <div className="max-w-xl mx-auto mt-20">

      <h1 className="text-2xl font-bold mb-6">Edit Project</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          name="title"
          value={project.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="border p-2"
        />

        <input
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2"
        />

        <input
          name="github"
          value={project.github}
          onChange={handleChange}
          placeholder="GitHub Link"
          className="border p-2"
        />

        <input
          name="live"
          value={project.live}
          onChange={handleChange}
          placeholder="Live Demo"
          className="border p-2"
        />

        <input
          name="image"
          value={project.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2"
        />

        <button className="bg-green-500 text-white p-2 rounded">
          Update Project
        </button>

      </form>
    </div>
  );
};

export default EditProject;