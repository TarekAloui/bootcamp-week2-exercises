const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
// Import models
const User = require('../models/User')

const run = (async () => {
  // Write Queries and Logs Here !!!
  const allUsers = await User.query()
  // console.log(allUsers)

  // Get all pets
  const allPets = await Pet.query()

  // Get the name and age of all users
  const allUserssDet = await User.query().select('firstName', 'lastName', 'age')
  console.log(allUserssDet)
  // ------
  cleanup()
})

run()
