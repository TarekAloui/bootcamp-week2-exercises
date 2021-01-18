exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('userId')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()
  
  table
    .string('first')
    .notNullable()
  
  table
    .string('last')
    .notNullable()
  
  table
    .string('bio')
  
  table
    .datetime('birthday')
  
  table
    .enum('status', ['married', 'single', 'other'])

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
