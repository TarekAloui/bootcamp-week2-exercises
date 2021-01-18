const casual = require('casual')
const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: casual.email,
    pets: [
      {
        name: 'Rocco',
        type: 'DOG',
      },
      {
        name: 'Rosey',
        type: 'DOG',
      },
    ],
  })

  // -----
  cleanup()
}

run()
