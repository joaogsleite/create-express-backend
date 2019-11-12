
const { scaffold } = require(`${__root}/utils/template`)

module.exports.questions = [
  { type: 'input', name: 'projectName', message: 'Project name?', default: 'example-project' },
]

module.exports.run = function (options) {
  console.log('Creating package.json...')
  console.log('Installing node modules...')
  console.log('Generating project file structure...')
  scaffold('default', options)
}
