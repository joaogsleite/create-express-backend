
const { scaffold } = require(`${__root}/utils/template`)
const npm = require(`${__root}/utils/npm`)

module.exports.questions = [
  { type: 'input', name: 'projectName', message: 'Project name?', default: 'example-project' },
]

module.exports.run = async function (options) {
  console.log('Creating package.json...')
  console.log('Generating project file structure...')
  const files = await scaffold('default', options)
  console.log(files.join('\n'))
  console.log('Installing node modules...')
  const installation = await npm.install()
  console.log(installation)
}
