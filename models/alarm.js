const { Model } = require('objection');

class Alarm extends Model {
  id
  soundId
  sound
  solved

  static get tableName() {
    return 'alarm';
  }

  static get relationMappings() {
    const Sound = require('./sound.js')
    return {
      sound: {
        relation: Model.HasOneRelation,
        modelClass: Sound,
        join: {
          from: 'alarm.soundId',
          to: 'sound.id'
        }
      }
    };
  }
}

module.exports = Alarm
