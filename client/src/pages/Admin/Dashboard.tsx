import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"
import { FaEdit, FaTrash } from "react-icons/fa";

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

const Dashboard = () => {
    const [projects, setProjects] = useState<Project[]>([]);


    useEffect(() => {
        const loadProjects = async () => {
            const res = await fetch(API);
            const data = await res.json();
            setProjects(data);
        };

        loadProjects();
    }, []);

    const handleDelete = (id: number) => {
        toast(
            ({ closeToast }) => (
                <div>
                    <p className="mb-3">Are you sure you want to delete?</p>

                    <div className="flex gap-2">
                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded"
                            onClick={async () => {
                                await fetch(`${API}/${id}`, { method: "DELETE" });

                                setProjects((prev) => prev.filter((p) => p.id !== id));

                                toast.success("Project deleted");

                                closeToast();
                            }}
                        >
                            Yes
                        </button>

                        <button
                            className="bg-gray-500 text-white px-3 py-1 rounded"
                            onClick={closeToast}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ),
            {
                autoClose: false,
            }
        );
    };

    return (
        <div className="max-w-6xl mx-auto mt-20 px-6">

            <h1 className="text-3xl font-bold mb-6">Admin Projects</h1>

            <Link
                to="/admin/add-project"
                className="bg-green-500 text-white px-4 py-2 rounded mb-6 inline-block"
            >
                Add Project
            </Link>

            <div className="grid bg-[#111] md:grid-cols-2 gap-6 mt-6">

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="border p-4 rounded-lg  text-white"
                    >
                        <img
                            src={project.image}
                            className="w-full h-40 object-cover rounded mb-3"
                        />

                        <h2 className="text-xl font-semibold">{project.title}</h2>

                        <p className="text-gray-400 text-sm mb-2">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-green-600 px-2 py-1 text-xs rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <Link
                                to={`/admin/edit-project/${project.id}`}
                                className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-[#00fd7a] text-[#00fd7a] hover:bg-[#00fd7a] hover:text-black transition-all duration-300"
                            >
                                <FaEdit size={18} />
                            </Link>

                            <button
                                onClick={() => handleDelete(project.id)}
                                className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-lg border-2 border-[#00fd7a] text-[#00fd7a] hover:bg-[#00fd7a] hover:text-black transition-all duration-300"
                            >
                                <FaTrash size={18} />
                            </button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default Dashboard;