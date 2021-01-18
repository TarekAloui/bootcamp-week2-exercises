const util = require('util')
const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const query1 = await User.query().withGraphFetched('pets')
  // console.log(query1)

  // Get all users, their pets, AND their children
  const query2 = await User.query().withGraphFetched('[pets, children]')
  // console.log(usersPetsChildren)

  // Get all users, their parents, and their grandparents
  const query3 = await User.query().withGraphFetched('parents.parents')
  // console.log(util.inspect(query3, false, null, true))

  // Get all users, their pets, their chilren, and their childrens' pets
  const query4 = await User.query().withGraphFetched('[pets, children.[children, pets]]')
  console.log(util.inspect(query4, false, null, true))

  // -----
  cleanup()
}

run()
