const express = require('express');
const fs = require('fs');
const router = express.Router();
const filePath = './data/projects.json';

router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
});


router.post('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const newProject = { id: Date.now(), ...req.body };
  data.push(newProject);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json(newProject);
});


router.put('/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const index = data.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).send('Project not found');
  data[index] = { ...data[index], ...req.body };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json(data[index]);
});


router.delete('/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const newData = data.filter(p => p.id != req.params.id);
  fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
  res.json({ message: 'Project deleted' });
});

module.exports = router;