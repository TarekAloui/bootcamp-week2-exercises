const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const userName = (await User.query().first()).fullName()
  const isDogPerson = (await User.query().first().withGraphFetched('pets')).dogPerson()
  console.log(`${userName} is ${isDogPerson ? 'a' : 'not a'} dog-person`)

  // -----
  cleanup()
}

run()
