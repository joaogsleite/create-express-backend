function addNewRoute (destFile, routerName, routeImportPath, routeHttpPath) {
  const content = require('fs').readFileSync(destFile, 'utf8')
  let query = /import \w* from '\w*routes\w*/g
  let lineToInsert = `import ${routerName} from '${routeImportPath}'`
  let newContent = addContentBefore(content, query, lineToInsert)
  query = /router.use\('\/api.*/g
  lineToInsert = `  router.use('${routeHttpPath}', ${routerName})`
  newContent = addContentBefore(newContent, query, lineToInsert)
}

module.exports = {
  addNewRoute,
}
