import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AddProject from "./pages/Admin/AddProject";
import EditProject from "./pages/Admin/EditProject";
import Dashboard from "./pages/Admin/Dashboard";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "admin/add-project", element: <AddProject /> },
            {
                path: "/admin/dashboard",
                element: <Dashboard />
            },
            {
                path: "/admin/edit-project/:id",
                element: <EditProject />
            },
            {
                path: "/aboutpage",
                element: <AboutPage />
            },
            {
                path: "/skillspage",
                element: <SkillsPage />
            },
            {
                path: "/projectspage",
                element: <ProjectsPage />
            },
           
        ],
    },
]);

export default router;
