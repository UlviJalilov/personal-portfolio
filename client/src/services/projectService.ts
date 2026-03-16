import axios from "axios";
import type { Project } from "../types/project";

const API = "http://localhost:5000/api/projects";

export const getProjects = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const addProject = async (data: Project) => {
  const res = await axios.post(API, data);
  return res.data;
};