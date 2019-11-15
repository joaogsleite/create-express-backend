
const { print } = require(`${__root}/utils`)
const { scaffold } = require(`${__root}/utils/template`)

module.exports.questions = [
]

module.exports.run = function (answers) {
  print('Creating microsoft auth passport strategy...')
  const options = {}
  scaffold('auth/microsoft', options)
  print('Microsoft auth is ready!')
}


