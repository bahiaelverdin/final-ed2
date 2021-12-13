const { Model } = require('objection');

class Movement extends Model {
  id
  createdAt
  detected

  static get tableName() {
    return 'movement';
  }
}
module.exports = Movement
