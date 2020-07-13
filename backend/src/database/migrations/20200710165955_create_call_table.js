exports.up = function (knex) {
  return knex.schema.createTable('call', (table) => {
    table.increments('id_call').primary();
    table.string('date');
    table.string('time');
    table.integer('id_worker');
    table.string('detail').notNullable();
    table.integer('emergency', 1);
    table.boolean('done');

    table.foreign('id_worker').references('id').inTable('worker');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('call');
};
