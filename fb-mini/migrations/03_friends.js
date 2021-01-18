
exports.up = async knex => knex.schema.createTable('friends', table => {
    table
        .uuid('requestId')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    table
        .uuid('requestorId')
    table
        .uuid('requestedId')
    table
        .timestamp('dateSent')
    table
        .enum('status', ['accepted', 'refused', 'pending'])
    table
        .timestamp('dateAccepted')
    
    table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
