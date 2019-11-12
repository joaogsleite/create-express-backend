
const { scaffold } = require(`${__root}/utils/template`)

module.exports.questions = [
  { type: 'confirm', name: 'confirmed', message: 'Confirm?', default: false },
]

module.exports.run = function (answers) {
  console.log('Creating microsoft login passport strategy...')
  console.log('Creating login routes...')
  const options = {}
  scaffold('login/microsoft', options)
}


