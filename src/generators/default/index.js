
const { print } = require(`${__root}/utils`)
const { scaffold } = require(`${__root}/utils/template`)
const npm = require(`${__root}/utils/npm`)

module.exports.questions = [
  { type: 'input', name: 'projectName', message: 'Project name?', default: 'example-project' },
]

module.exports.run = async function (options) {
  print('Creating package.json...')
  print('Generating project file structure...')
  const files = await scaffold('default', options)
  console.log(files.join('\n'))
  print('Installing node modules...')
  const installation = await npm.install()
  console.log(installation)
  print('Your project is ready!')
}
