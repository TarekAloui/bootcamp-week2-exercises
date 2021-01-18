const BaseModel = require('./BaseModel')

// Write your relation model here!
class Relation extends BaseModel {
  static get tableName() {
    return 'relations'
  }

  static get relationMappings() {
    return {

    }
  }
}

module.exports = Relation
