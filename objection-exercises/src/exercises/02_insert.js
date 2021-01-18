const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')

// Import models

const run = async () => {
  // Write Queries and Logs Here !!!
  const date = new Date()
  let dateFormatted = date.toLocaleString().split('/').join('-').replace(',', '')
  dateFormatted = dateFormatted.substr(0, dateFormatted.length - 3)
  console.log(dateFormatted)

  // // Insert yourself in the users table
  const tarek = await User.query().insert({
    firstName: 'Tarek',
    lastName: 'Aloui',
    email: 'taloui@college.harvard.edu',
    age: 20,
  }).returning('*')

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  await Pet.query().insert({
    name: 'fluffy',
    ownerId: tarek.id,
    type: 'DOG',
  })

  // -----
  cleanup()
}

run()
