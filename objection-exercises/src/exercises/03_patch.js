const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Update anyone below the age of 18 to be 18 years old (they shouldn't be keeping pets)
  const underAgeUsers = await User.query().patch({ age: '18' }).where('age', '<', 18).returning('*')
  const pets = await User.relatedQuery('pets').for(underAgeUsers).delete()

  // -----
  cleanup()
}

run()
