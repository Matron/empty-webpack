const path = require("path");
/* const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin; */

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // use only in prod moode
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["eslint-loader"]
      }
    ],
  },
  // use only in prod moode
  /* plugins: [
    new BundleAnalyzerPlugin(),
  ], */
  // use oonly in dev mode
  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: "/dist/",
    compress: true,
    hot: true,
    port: 9000
  },
};
