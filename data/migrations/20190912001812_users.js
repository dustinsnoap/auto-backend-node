
exports.up = (knex) =>
    knex.schema.createTable('users', tbl => {
        tbl.increments('id')
            .primary()
            .unique()
            .notNullable()
        tbl.text('username')
            .unique()
        tbl.text('password')
            .notNullable()
        tbl.text('email')
            .unique()
            .notNullable()
        tbl.text('first_name')
        tbl.text('last_name')
        tbl.text('avatar')
        tbl.timestamps(true, true)
    })

exports.down = (knex) =>
    knex.schema.dropTableIfExists('users')
