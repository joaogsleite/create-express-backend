
function contentToLines (fileContent) {
  return fileContent.split('\n')
}

function linesToContent (lines) {
  return lines.join('\n')
}

function queryContent (fileContent, checkContent) {
  return fileContent.match(checkContent)
}

function addContentAfter (fileContent, query, contentToAdd, linesAfter = 1) {
  const lines = contentToLines(fileContent)
  for (const index in lines) {
    if (queryContent(lines[index], query)) {
      lines.splice(index + linesAfter, 0, contentToAdd)
      return linesToContent(lines)
    }
  }
  return false
}

function addContentBefore (fileContent, query, contentToAdd, linesBefore = 0) {
  return addContentAfter(fileContent, query, contentToAdd, -linesBefore)
}
