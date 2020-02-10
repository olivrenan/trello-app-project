const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonPaths = require("./paths");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        include: commonPaths.sourceStyles,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
      path: commonPaths.outputPath,
      filename: "./index.html"
    })
  ]
};
