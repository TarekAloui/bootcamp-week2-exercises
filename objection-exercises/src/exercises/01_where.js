const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const user1 = await User.query().where('firstName', 'Kaley')

  // Do the same with object notation
  const user2 = await User.query().where({ firstName: 'Kaley', lastName: 'Bode' })

  // Get all DOGS and BIRDS
  const dogs_cats = await Pet.query().whereIn('type', ['DOG', 'CAT'])
  console.log(dogs_cats)
  // -----
  cleanup()
}

run()
