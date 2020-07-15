'use strict'

function runTests (rdf) {
  require('./DatasetCore.cjs')(rdf)
}

if (global.rdf) {
  runTests(global.rdf)
}

module.exports = runTests
