exports.up = knex => knex.schema.createTable('relations', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('parent_id')
    .references('users.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

  table
    .uuid('child_id')
    .references('users.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

  table.timestamps(true)
})

exports.down = knex => knex.schema.dropTableIfExists('relations')
