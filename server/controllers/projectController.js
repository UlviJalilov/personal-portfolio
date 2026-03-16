const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "../data/projects.json")


exports.getProjects = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath))
  res.json(data)
}


exports.addProject = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath))

  const newProject = {
    id: Date.now(),
    ...req.body
  }

  data.push(newProject)

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

  res.json(newProject)
}


exports.deleteProject = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath))

  const filtered = data.filter(p => p.id != req.params.id)

  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2))

  res.json({ message: "Deleted" })
}


exports.updateProject = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath))

  const updated = data.map(p =>
    p.id == req.params.id ? { ...p, ...req.body } : p
  )

  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2))

  res.json({ message: "Updated" })
}