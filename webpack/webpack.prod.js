const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const commonPaths = require("./paths");

module.exports = {
  mode: "production",
  devtool: "source-map",
  cache: true,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        include: commonPaths.sourceStyles,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
      path: commonPaths.outputPath,
      filename: "./index.html",
      production: true,
      inject: true,
      minify: {
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        keepClosingSlash: true
      }
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new MiniCssExtractPlugin({
      filename: `${commonPaths.outputCssFolder}/[name].[hash].css`,
      chunkFilename: "[id].[hash].css"
    })
  ]
};
