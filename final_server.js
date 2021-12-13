const express = require('express')
const app = express()
var cors = require('cors')
const Knex = require('knex');
const { Model } = require('objection');
const Movement = require('./models/movement.js');
const Sound = require('./models/sound.js');
const Alarm = require('./models/alarm.js');
const port = process.env.PORT || 3000
app.use(cors())

app.use(express.json())

const knex = Knex({
  client: 'pg',
  connection: process.env.DATABASE_URL ||{
    host:'127.0.0.1',
    user: 'testuser',
    password: 'password',
    database: 'postgres'
  }
});

Model.knex(knex);

async function createSchema() {
  // Creats the tables
  if (!(await knex.schema.hasTable('movement'))) {
    await knex.schema.createTable('movement', (table) => {
      table.increments('id').primary();
      table.datetime('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
    });
  }

  if (!(await knex.schema.hasTable('sound'))) {
    await knex.schema.createTable('sound', (table) => {
      table.increments('id').primary();
      table.datetime('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.integer('sound_value');
    });
  }

  if (!(await knex.schema.hasTable('alarm'))) {
    await knex.schema.createTable('alarm', (table) => {
      table.increments('id').primary();
      table.integer('soundId').references('sound.id');
      table.boolean('solved').notNullable().defaultTo(0);
    });
  }
}

// Adds to table 'movement' the information from the raspberry pi
app.post('/motion', async (req,res) => {
  const movement = await Movement.query().insert({
    createdAt: new Date(),
  })
  res.send(movement)
})

// Adds to table 'sound' the information from the raspberry pi
// If the sound level is above 5, an alarm is created
app.post('/sounds', async (req,res) => {
  const sound = await Sound.query().insert({
    createdAt: new Date(),
    sound_value:req.body.sound_value
  })
  if(sound.sound_value>5){
    const alarm = await Alarm.query().insert({
      soundId: sound.id
    })
  }
  res.send(sound)
})

// When localhost:3000/motion is called, it returns a list of all the movements
app.get('/motion', async (req, res) => {
  const movements = await Movement.query()
  .orderBy('id')
  res.send({movements})
})

// When localhost:3000/sounds is called, it returns a list of all the sounds
app.get('/sounds', async (req, res) => {
  const sounds = await Sound.query()
  .withGraphFetched('alarm')
  .orderBy('id')
  res.send({sounds})
})

// When localhost:3000/alarms is called, it returns a list of all the alarms
app.get('/alarms', async (req, res) => {
  const alarms = await Alarm.query()
  .withGraphFetched('sound')
  .orderBy('soundId')
  res.send({alarms})
})

// When localhost:3000/update-alarms is called, it updates the alarm to solved in the database
app.get('/update-alarms', async (req, res) => {
  alarm_id = req.query.alarm_id
  alarm_solved = req.query.solved
  const alarms = await Alarm.query()
  .where('id', alarm_id).update({solved: alarm_solved})
  res.send({alarms})
})

// When localhost:3000/report is called,
// it returns the amount of movements, amount of alarms and average sound level
app.get('/report', async (req, res) => {
  startDate = new Date(req.query.start)
  endDate = new Date(req.query.end)
  //generar objeto con cantidades
  const movements = await Movement.query()
  .count('id')
  .whereBetween('createdAt', [startDate, endDate] )
  const sounds = await Sound.query()
  .avg('sound_value')
  .whereBetween('createdAt', [startDate, endDate])
  const alarms = await Alarm.query()
  .count('soundId')
  .join('sound', function() { this.on('alarm.soundId', '=', 'sound.id').onBetween('sound.createdAt', [startDate, endDate])
})
  //.from('alarm')
  let reports = {
    alarms_count: alarms,
    movement_count: movements,
    sound_avg: sounds
  }

  res.send({reports})
})

app.listen(port, () => {
  console.log('Button listening at http://localhost:3000');
})

createSchema()
