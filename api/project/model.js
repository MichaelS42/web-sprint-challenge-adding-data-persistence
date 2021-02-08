// build your `Project` model here
const db = require("../../data/db-config.js");

module.exports = { find, findById, findTasks, add };

async function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .then((schemaObject) => {
      if (!schemaObject.length) {
        return Promise.resolve(null);
      }
      return schemaObject;
    });
}

function findTasks(id) {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select("p.id", "p.project_name", "p.project_description")
    .where({ user_id: id });
}

function add(project) {
  return db("projects")
    .insert(project)
    .then((id) => {
      return findById(id);
    });
}
