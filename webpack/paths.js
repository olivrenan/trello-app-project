const path = require("path");

module.exports = {
  controllerPath: path.resolve(__dirname, "../", "controller"),
  entryPath: path.resolve(__dirname, "../", "src/app/index.jsx"),
  node_modules: path.resolve(__dirname, "../", "node_modules"),
  outputCssFolder: "css",
  outputFontsFolder: "fonts",
  outputImagesFolder: "images",
  outputJsFolder: "js",
  outputPath: path.resolve(__dirname, "../", "public"),
  root: path.resolve(__dirname, "../"),
  sourceApp: path.resolve(__dirname, "../", "src/app"),
  sourceImages: path.resolve(__dirname, "../", "src/images"),
  sourceStyles: path.resolve(__dirname, "../", "src/styles"),
  templatePath: path.resolve(__dirname, "../", "src/index.html")
};
