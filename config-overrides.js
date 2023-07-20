// eslint-disable-next-line @typescript-eslint/no-var-requires
// const webpack = require('webpack')

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {}
  config.resolve.fallback = fallback
  config.ignoreWarnings = [/Failed to parse source map/]

  return config
}
