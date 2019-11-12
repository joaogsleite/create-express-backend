const generators = require(`${root}/generators`)

module.exports = function () {
  for (const generator in generators) {
    if (typeof generators[generator] === 'function') {
      console.log(generator)
    } else {
      for (const subGenerator in generators[generator]){
        console.log(`${generator}:${subGenerator}`)
      }
    }
  }
}
