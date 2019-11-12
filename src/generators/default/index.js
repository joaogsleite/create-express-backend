
const { scaffold } = require(`${__root}/utils/template`)

module.exports.questions = [
  { type: 'confirm', name: 'confirmed', message: 'Confirm?', default: false },
  { type: 'input', name: 'aValue', message: 'Variable a value?', default: 1 },
  { type: 'input', name: 'bValue', message: 'Variable b value?', default: 'example' },
]

module.exports.run = function ({ aValue, bValue }) {
  console.log('Creating package.json...')
  console.log('Installing node modules...')
  console.log('Generating project file structure...')
  const options = {
    a: aValue,
    b: bValue,
  }
  scaffold('default', options)
}