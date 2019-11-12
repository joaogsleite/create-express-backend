#!/usr/bin/env node

global.__root = __dirname

const cli = require('commander')
const { red, green } = require('chalk')

// import generators, main init script and utils functions
const generators = require('./generators')
const utils = require('./utils')

// registering generators
for (const generator in generators) {
  if (typeof generator === 'function' || generator.run) {
    utils.registerGenerator(generator, generators[generator])
  } else {
    for (const subGenerator in generators[generator]) {
      const name = `${generator}:${subGenerator}`
      const func = generators[generator][subGenerator]
      utils.registerGenerator(name, func)
    }
  }
}

// parse cli arguments and options
cli.option('-l, --list').parse(process.argv)

if (cli.list) {
  utils.print('Listing generators:')
  utils.listGenerators()
} else if (cli.args.length === 0){
  if (!global.aGeneratorWasFound) {
    utils.print(green('Running project init generator.'))
    utils.runGenerator(require('./generators/default'))
  }
} else if(!global.aGeneratorWasFound) {
  utils.print('Generator', red(cli.args[0]), 'not found.')
  utils.print('Available generators:')
  utils.listGenerators()
  process.exit(1)
}
