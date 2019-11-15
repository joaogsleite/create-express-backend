const exec = require('child_process').exec

const options = { 
  stdio: [0,1,2],
  cwd: process.env.NPM_TEST_DEST || './',
}

function install () {
  return new Promise((resolve, reject) => {
    exec('npm install', options, (error, stdout, stderr) => {
      if (error) {
        reject(stderr)
      } else {
        resolve(stdout)
      }
    })
  })
  
}

module.exports = {
  install,
}