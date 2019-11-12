
const fs = require('fs-extra')
const path = require('path')

async function getTemplateFolder (source) {
  const sourcePath = path.join(__root, 'templates', source)
  if (fs.lstatSync(sourcePath).isFile()) {
    const repoPath = `${sourcePath}.git`
    if (fs.existsSync(repoPath)) {
      fs.removeSync(repoPath)
    }
    fs.mkdirSync(repoPath)
    
    const git = require('simple-git/promise')(repoPath)
    const fileContents = fs.readFileSync(sourcePath, 'utf-8')
    const repoUrl = fileContents.split('#')[0]
    const repoBranch = fileContents.split('#')[1] || 'master'

    await git.clone(repoUrl, repoPath)
    await git.checkout(repoBranch)
    return repoPath
  } else {
    return sourcePath
  }
}

module.exports = {
  getTemplateFolder,
}