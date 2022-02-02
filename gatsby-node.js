require('@babel/register')({
  presets: [
    require.resolve('@babel/preset-env'),
    require.resolve('@babel/preset-typescript'),
  ],
  extensions: ['.js', '.ts', '.tsx'],
})

const {
  onCreateNode,
  createPages,
  onCreateBabelConfig,
} = require('./gatsby/node')

module.exports = {
  onCreateNode,
  createPages,
  onCreateBabelConfig,
}
