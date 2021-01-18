const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const users1 = await User.query().limit(5).orderBy('lastName')
  console.log(users1)

  // Get the second 5 users, ordered by lastName
  const users2 = await User.query().limit(5).offset(5).orderBy('lastName')
  console.log(users2)

  // -----
  cleanup()
}

run()
