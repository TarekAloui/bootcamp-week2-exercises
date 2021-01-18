const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const user = await User.query().findById('c1758207-2704-4309-91e1-6c06c042f103')

  // Use that instance to create a new pet related that user
  await user.$relatedQuery('pets').insert({
    name: 'Pikachu',
    type: 'DOG', // for lack for labels, lol
  })

  // Use that instance to get all of the user's pets and children
  const petsChildren = (await user.$fetchGraph('[pets, children]')).$pick(['pets', 'children'])
  console.log(petsChildren)
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  // -----
  cleanup()
}

run()
