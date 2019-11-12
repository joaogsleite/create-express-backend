
const { addNewRoute } = require(`${root}/shared/routes`)

module.exports.questions = [
  { type: 'confirm', name: 'confirmed', message: 'Confirm?', default: false },
]

module.exports.run = function (answers) {
  console.log('Creating local login passport strategy...')
  console.log('Creating login routes...')
  addNewRoute('routes/index.js', 'userRouter', './user', '/api/user')
  const options = {}
  scaffold('./src/templates/login/local', options)
}


