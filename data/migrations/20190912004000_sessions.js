exports.up = (knex) =>
    knex.schema.createTable('sessions', tbl => {
        tbl.increments('id')
            .unique()
            .notNullable()
            .primary()
        tbl.integer('users')
            .references('id')
            .inTable('users')
            .notNullable()
        tbl.text('session_id')
            .unique()
            .notNullable()
        tbl.timestamps(true, true)
    })

exports.down = (knex) =>
    knex.schema.dropTableIfExists('sessions')