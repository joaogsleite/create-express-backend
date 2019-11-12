const fs = require('fs')
const path = require('path')

function isDirectory (filePath) {
  return new Promise((resolve, reject) => {
    const resolved = path.resolve(filePath)
    fs.stat(resolved, (error, result) => {
      if (error) {
        reject()
      } else {
        const isDir = result.isDirectory()
        resolve(isDir)
      }
    })
  })
}

function createDirectory (dirPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, { recursive: true }, (error) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

function exists (filePath) {
  return isDirectory(filePath).then(() => true).catch(() => false)
}

function writeFile (destination, content) {
  const dirPath = path.dirname(destination)
  return exists(dirPath).then((result) => {
    if (!result) {
      return createDirectory(dirPath)
    }
  }).then(() => {
    fs.writeFile(destination, content, (error) => {
      if (error) {
        throw error
      } else {
        return destination
      }
    })
  })
}

function listDirectory (folder) {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (error, result) => {
      if (error) {
        reject()
      } else {
        resolve(result.map((item) => path.join(folder, item)))
      }
    })
  })
}

async function recursiveList (folder) {
  if (await isDirectory(folder)) {
    const listing = await listDirectory(folder)
    if (listing && listing.length > 0) {
      return listing.reduce(async (result, item) => {
        const list = await recursiveList(item)
        return [...(await result), ...list]
      },[])
    }
  }
  return [folder]
}

module.exports = {
  recursiveList,
  writeFile,
  exists,
  isDirectory,
}
