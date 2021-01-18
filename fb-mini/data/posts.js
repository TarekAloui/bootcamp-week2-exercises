const casual = require('casual')
const users = require('./users')

const userIds = users.map(user => user.userId)

casual.define('post', () => ({
  postId: casual.uuid,
  text: casual.sentence,
  userId: casual.random_element(userIds),
  numLikes: casual.integer(0,100),
  datePosted: casual.moment,
  dateEdited: casual.moment,
}))

const posts = Array.from(Array(20),()=>casual.post)

module.exports = posts