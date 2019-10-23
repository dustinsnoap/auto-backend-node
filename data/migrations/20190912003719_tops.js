exports.up = (knex) =>
    knex.schema.createTable('tops', tbl => {
        tbl.increments('id')
            .unique()
            .notNullable()
            .primary()
        tbl.text('list_name')
            .notNullable()
        tbl.integer('users')
            .references('id')
            .inTable('users')
            .notNullable()
        tbl.specificType('items', 'TEXT[]')
        tbl.timestamps(true, true)
    })

exports.down = (knex) =>
    knex.schema.dropTableIfExists('tops')
