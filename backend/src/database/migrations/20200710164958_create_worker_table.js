exports.up = function (knex) {
  return knex.schema.createTable('worker', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('section').notNullable();
    table.string('ramal').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('worker');
};
