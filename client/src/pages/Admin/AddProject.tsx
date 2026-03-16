import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { addProject } from "../../services/projectService"
import type { Project } from "../../types/project"
import type { FormikHelpers } from "formik"
import { toast } from "react-toastify"

const projectSchema = Yup.object({
  title: Yup.string()
    .min(3, "Minimum 3 characters")
    .required("Title is required"),

  description: Yup.string()
    .min(10, "Description too short")
    .required("Description is required"),

  technologies: Yup.string()
    .required("Technologies required"),

  github: Yup.string()
    .url("Invalid URL"),

  live: Yup.string()
    .url("Invalid URL"),

  image: Yup.string()
    .url("Invalid image URL")
})

const AddProject = () => {

  const initialValues = {
    title: "",
    description: "",
    technologies: "",
    github: "",
    live: "",
    image: "",
  }

  interface FormValues {
    title: string
    description: string
    technologies: string
    github: string
    live: string
    image: string
  }

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {

      const project: Project = {
        ...values,
        technologies: values.technologies.split(",").map(t => t.trim())
      }

      await addProject(project)

      toast.success("Project added successfully!")

      resetForm()

    } catch (err) {
      console.error(err)

      toast.error("Failed to add project")
    }
  }
  return (
    <div className="max-w-xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Add New Project
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={projectSchema}
        onSubmit={handleSubmit}
      >

        <Form className="space-y-4">


          <div>
            <label className="block text-gray-300">Title</label>

            <Field
              type="text"
              name="title"
              className="w-full p-2 rounded bg-gray-900 text-white"
            />

            <ErrorMessage
              name="title"
              component="p"
              className="text-red-400 text-sm"
            />
          </div>


          <div>
            <label className="block text-gray-300">Description</label>

            <Field
              as="textarea"
              name="description"
              className="w-full p-2 rounded bg-gray-900 text-white"
            />

            <ErrorMessage
              name="description"
              component="p"
              className="text-red-400 text-sm"
            />
          </div>


          <div>
            <label className="block text-gray-300">
              Technologies (comma separated)
            </label>

            <Field
              type="text"
              name="technologies"
              className="w-full p-2 rounded bg-gray-900 text-white"
            />

            <ErrorMessage
              name="technologies"
              component="p"
              className="text-red-400 text-sm"
            />
          </div>


          <div>
            <label className="block text-gray-300">GitHub Link</label>

            <Field
              type="url"
              name="github"
              className="w-full p-2 rounded bg-gray-900 text-white"
            />

            <ErrorMessage
              name="github"
              component="p"
              className="text-red-400 text-sm"
            />
          </div>


          <div>
            <label className="block text-gray-300">Live Demo Link</label>

            <Field
              type="url"
              name="live"
              className="w-full p-2 rounded bg-gray-900 text-white"
            />

            <ErrorMessage
              name="live"
              component="p"
              className="text-red-400 text-sm"
            />
          </div>


          <div>
            <label className="block text-gray-300">Image URL</label>

            <Field
              type="url"
              name="image"
              className="w-full p-2 rounded bg-gray-900 text-white"
            />

            <ErrorMessage
              name="image"
              component="p"
              className="text-red-400 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-green-400 hover:bg-green-300 text-black px-4 py-2 rounded mt-4"
          >
            Add Project
          </button>

        </Form>

      </Formik>
    </div>
  )
}

export default AddProject