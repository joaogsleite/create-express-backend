
const { addContentBefore } = require(`${__root}/utils/edit`)

function addNewRoute (destFile, routerName, routeImportPath, routeHttpPath) {
  destFile = (process.env.NPM_TEST_DEST || '.') + destFile
  const content = require('fs').readFileSync(destFile, 'utf8')
  let query = /import \w* from '\w*routes\w*/g
  let lineToInsert = `import ${routerName} from '${routeImportPath}'`
  let newContent = addContentBefore(content, query, lineToInsert)
  query = /router.use\('\/api.*/g
  lineToInsert = `router.use('${routeHttpPath}', ${routerName})`
  newContent = addContentBefore(newContent, query, lineToInsert)
  require('fs').writeFileSync(destFile, newContent, 'utf8')
}

module.exports = {
  addNewRoute,
}
