// build your `Task` model here
const db = require("../../data/db-config.js");

module.exports = { find, findById, findTasks, add};

async function find() {
  return db("tasks");
}

function findById(id) {
  return db("tasks")
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
    .join("tasks", "tasks.task_id", "tasks.id")
    .select("p.id", "project_name", "p.name")
    .where({ user_id: id });
}

function add(task) {
  return db("tasks")
    .insert(task)
    .then((id) => {
      return findById(id);
    });
}
