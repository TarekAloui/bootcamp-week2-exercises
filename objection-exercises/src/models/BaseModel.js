const { Model, snakeCaseMappers } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class BaseModel extends Model {
  $beforeInsert() {
    this.created_at = new Date().toISOString()
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString()
  }
}

module.exports = BaseModel
