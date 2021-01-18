const casual = require('casual')

casual.define('user', () => ({
  userId: casual.uuid,
  email: casual.email,
  first: casual.first_name,
  last: casual.last_name,
  bio: casual.short_description,
  birthday: casual.date(format = 'YYYY-MM-DD'),
  status: casual.random_element(['married', 'single', 'other'])
}))


const userData = Array.from(Array(20),()=>casual.user)

module.exports = userData
