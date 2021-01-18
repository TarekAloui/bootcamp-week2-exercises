const { Model } = require('objection')
const BaseModel = require('./BaseModel')

// Write your Pet model here!
class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get relationMappings() {
    const User = require('./User')

    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        },
      },
    }
  }
}

module.exports = Pet
