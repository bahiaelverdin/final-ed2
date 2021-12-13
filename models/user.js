const { Model } = require('objection');

class User extends Model {
  id
  name
  username
  alerts

  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    const Alert = require('./alert.js')
    return {
      alerts: {
        relation: Model.HasManyRelation,
        modelClass: Alert,
        join: {
          from: 'users.id',
          to: 'alerts.userId'
        }
      }
    };
  }
}
module.exports = User
