const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node-modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [new GasPlugin()],
};
