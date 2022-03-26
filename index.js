/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  return {
    postcssPlugin: 'remove-google-fonts',
    Root (root) {
      root.walkAtRules('import', rule => {
        if (rule.params.includes('fonts.googleapis.com')) {
          rule.remove()
        }
      })
    }
  }
}

module.exports.postcss = true
