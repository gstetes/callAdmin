exports.up = function (knex) {
  return knex.schema.createTable('call', function (table) {
    table.increments('id_call').primary();
    table.date('date');
    table.time('time');
    table.integer('id_worker');
    table.string('detail').notNullable();
    table.integer('emergency', 1);

    table.foreign('id_worker').references('id').inTable('worker');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('call');
};
