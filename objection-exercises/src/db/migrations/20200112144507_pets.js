exports.up = knex => knex.schema.createTable('pets', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('owner_id')
    .references('users.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

  table.enum('type', ['DOG', 'CAT', 'BIRD', 'FISH', 'ALLIGATOR']).notNullable()

  table.string('name').notNullable()

  table.timestamps(true)
})

exports.down = knex => knex.schema.dropTableIfExists('pets')
