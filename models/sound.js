const { Model } = require('objection');

class Sound extends Model {
  id
  createdAt
  sound_value
  alarm

  static get tableName() {
    return 'sound';
  }

  static get relationMappings() {
    const Alarm = require('./alarm.js')
    return {
      alarm: {
        relation: Model.HasManyRelation,
        modelClass: Alarm,
        join: {
          from: 'sound.id',
          to: 'alarm.soundId'
        }
      }
    };
  }
}
module.exports = Sound
