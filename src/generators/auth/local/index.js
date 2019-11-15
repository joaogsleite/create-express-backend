
const { print } = require(`${__root}/utils`)
const { scaffold } = require(`${__root}/utils/template`)

module.exports.questions = [
]

module.exports.run = function (answers) {
  print('Creating local auth passport strategy...')
  const options = {}
  scaffold('auth/local', options)
  print('Local auth is ready!')
}


