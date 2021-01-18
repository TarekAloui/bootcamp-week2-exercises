const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const { count } = (await User.query().count())[0]
  console.log(count)

  // Get the average age of users
  const { avg } = (await User.query().avg('age'))[0]
  console.log(avg)

  // Get the total number of dogs
  const { count: countDogs } = (await Pet.query().where('type', 'DOG').count())[0]
  console.log(countDogs)

  // -----
  cleanup()
}

run()
