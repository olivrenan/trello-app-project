const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  outputPath: path.resolve(__dirname, "../", "public"),
  entryPath: path.resolve(__dirname, "../", "src/app/index.jsx"),
  templatePath: path.resolve(__dirname, "../", "src/index.html"),
  sourceApp: path.resolve(__dirname, "../", "src/app"),
  sourceStyles: path.resolve(__dirname, "../", "src/styles"),
  sourceImages: path.resolve(__dirname, "../", "src/images"),
  node_modules: path.resolve(__dirname, "../", "node_modules"),
  outputImagesFolder: "images",
  outputFontsFolder: "fonts",
  outputCssFolder: "css",
  outputJsFolder: "js"
};
