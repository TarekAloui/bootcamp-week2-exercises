const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  await Pet.query().delete().where({ type: 'CAT' })

  // -----
  cleanup()
}

run()
