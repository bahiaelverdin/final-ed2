const { Model } = require('objection');
const User = require('./user.js')

class Alert extends Model {
  id
  type
  description
  userId
  createdAt
  user

  static get tableName() {
    return 'alerts';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        join: {
          from: 'alerts.userId',
          to: 'users.id'
        }
      }
    };
  }
}

module.exports = Alert
