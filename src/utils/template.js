const ejs = require('ejs')
const path = require('path')
const { writeFile, recursiveList } = require(`${__root}/utils/fs`)


function render(file, data) {
  return new Promise((resolve, reject) => {
    const EJS_NO_OPTIONS = {}
    return ejs.renderFile(file, data, EJS_NO_OPTIONS, (error, content) => {
      if (error) {
        reject(error)
      } else {
        resolve(content)
      }
    })
  })
}

const destination = path.resolve(process.env.NPM_TEST_DEST || './')
function scaffold (source, options) {
  const sourcePath = path.join(__root, 'templates', source)
  return recursiveList(sourcePath).then((files) => {
    const promises = files.map((filePath) => {
      return render(filePath, options).then((content) => {
        const relativePath = path.resolve(filePath).substring(path.resolve(sourcePath).length)
        const destinationPath = path.join(destination, relativePath)
        return writeFile(destinationPath, content)
      })
    })
    return Promise.all(promises)
  })
}

module.exports = {
  scaffold,
  render,
}