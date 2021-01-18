const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
const User = require('../models/User')
// Import models

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */

  // PS: Was not sure if total pets = total pets for the user or total pets for all users (assumed the latter)
  const user = await User.transaction(async trx => {
    const newUser = await User.query(trx).insert({
      firstName: 'Tarek',
      lastName: 'Aloui',
      email: 'example5@gmail.com',
      age: 20,
    }).returning('*')

    await newUser.$relatedQuery('pets', trx).insert({
      name: 'Kitsune',
      type: 'CAT',
    })

    const nPetsTotal = await Pet.query(trx).resultSize() // cleaner than count and then deconstructing it

    console.log(nPetsTotal)

    if (nPetsTotal > 15) {
      await Pet.query(trx).delete().where('type', 'BIRD')
    }
  })

  // -----
  cleanup()
}

run()
