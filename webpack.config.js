const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: "./dist",
    publicPath: "/",
    hot: true,
  },
  output: {
    publicPath: "dist",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
