const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const nodeExternals = require("webpack-node-externals");

module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  target: "node",
  externals: [nodeExternals()],
});
