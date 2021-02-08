// build your `Resource` model here
const db = require("../../data/db-config.js");

module.exports = { find, findById, add};

async function find() {
  return db("resources");
}

function findById(id) {
  return db("resources")
    .where({ id })
    .then((schemaObject) => {
      if (!schemaObject.length) {
        return Promise.resolve(null);
      }
      return schemaObject;
    });
}

function add(resource) {
  return db("resources")
    .insert(resource)
    .then((id) => {
      return findById(id);
    });
}
