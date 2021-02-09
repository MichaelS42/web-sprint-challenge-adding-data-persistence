// build your `Resource` model here
const db = require("../../data/dbConfig.js");

module.exports = { find, findById, add };

async function find() {
  return db("resources");
}

async function findById(id) {
  const [resource] = await db('resource').where({ resource_id: id })
  return resource
}


// function findById(id) {
//   return db("resources")
//     .where({ id })
//     .then((schemaObject) => {
//       if (!schemaObject.length) {
//         return Promise.resolve(null);
//       }
//       return schemaObject;
//     });
// }

function add(resource) {
  return db("resources")
    .insert(resource)
    
}
