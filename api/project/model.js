// build your `Project` model here
const db = require("../../data/dbConfig.js");

module.exports = { get, getById, add };


async function get() {
  const projects = await db("projects")
  return projects.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed == 0 ? false : true,
    }
  });
}

async function getById(id) {
  const [project] = await db("projects").where({ project_id : id })
  return {
    ...project,
    project_completed: project.project_completed == 0 ? false : true
  }
}


function add(project) {
  return db("projects")
  .insert(project)
}
