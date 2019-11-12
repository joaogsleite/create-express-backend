// node modules
const inquirer = require('inquirer')
const chalk = require('chalk')
const cli = require('commander')

// sub utils functions
const listGenerators = require('./list-generators')


function print(...text) {
  console.log(chalk.blue('>>>'), ...text)
}

function runGenerator (generator, ...args) {
  if (generator.questions && generator.questions.length > 0) {
    inquirer.prompt(generator.questions).then((answers) => {
      generator.run(answers, ...args)
    })
  } else if (generator.run) {
    generator.run(...args)
  } else {
    generator(...args)
  }
}

function registerGenerator(name, generator) {
  cli.command(name).action((...args) => {
    global.aGeneratorWasFound = true
    print('Running', chalk.green(name), 'generator')
    runGenerator(generator, ...args)
  })
}

module.exports = {
  print,
  registerGenerator,
  runGenerator,
  listGenerators,
}
