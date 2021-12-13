const { Model } = require('objection');

// Person model.
class Person extends Model {
  id
  firstName
  children
  parentId

  static get tableName() {
    return 'persons';
  }

  static get relationMappings() {
    return {
      children: {
        relation: Model.HasManyRelation,
        modelClass: Person,
        join: {
          from: 'persons.id',
          to: 'persons.parentId'
        }
      }
    };
  }
}

// cuando lo exporta solo exporta eso 
module.exports = Person
