import * as DataFactory from '@rdf-esm/data-model'
import { DatasetCore } from './DatasetCore.js'

export * from '@rdf-esm/data-model'

export function dataset (quads) {
  return new DatasetCore(quads)
}

export default {
  dataset,
  ...DataFactory
}
