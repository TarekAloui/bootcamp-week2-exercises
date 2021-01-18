
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
        .uuid('postId')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    table
        .string('text')
    table
        .uuid('userId')
    table
        .integer('numLikes')
    table
        .timestamp('datePosted')
    table
        .timestamp('dateEdited')

    table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
