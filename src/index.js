const isNil = require(`lodash/isNil`)
const has = require(`lodash/has`)
const remarkGenericExtensions = require(`remark-generic-extensions`)

module.exports.setParserPlugins = options => {
  if (isNil(options) || !has(options, `elements`)){
    throw Error(`missing required "elements" option`)
  }
  return [[remarkGenericExtensions, {elements: options.elements}]]
}
