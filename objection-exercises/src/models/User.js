const { Model } = require('objection')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get virtualAttributes() {
    return ['fullName', 'dogPerson']
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  dogPerson() {
    if (this.pets) {
      return this.pets.filter(pet => pet.type === 'DOG').length > 0
    }

    throw new Error('ERROR: relation "pet" not fetched, please call withGraphFetched("pet") first')
  }

  static get relationMappings() {
    const Pet = require('./Pet')

    return {
      children: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId',
          },
          to: 'users.id',
        },
      },
      parents: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId',
          },
          to: 'users.id',
        },
      },
      pets: {
        relation: Model.HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'pets.ownerId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = User
