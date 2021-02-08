exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("project_name", 128).unique();
      tbl.string("project_description", 128);
      tbl.integer("project_completed").notNullable();
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("resource_name", 128).unique().notNullable();
      tbl.text("resource_description", 128);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("task_description", 128).notNullable();
      tbl.string("task_notes", 128);
      tbl.integer("task_completed").notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id");
    })
    .createTable("project_resources", (tbl) => {
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resources.id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id");
      tbl.primary(["resource_id", "project_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
