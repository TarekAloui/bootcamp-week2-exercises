const casual = require('casual')
const users = require('./users')

const userIds = users.map(user => user.userId)

casual.define('friend', () => ({
  requestId: casual.uuid,
  requestorId: casual.random_element(userIds),
  requestedId: casual.random_element(userIds),
  dateSent: casual.moment,
  status: casual.random_element(['accepted', 'refused', 'pending']),
  dateAccepted: casual.moment,
}))

const friends = Array.from(Array(20),()=>casual.friend)

module.exports = friends