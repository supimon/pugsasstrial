const path = require("path");
const homepageJS = path.resolve(__dirname, "src/pages/homepage");
const stickynavpageJS = path.resolve(__dirname, "src/pages/stickynavpage");
const accordionpageJS = path.resolve(__dirname, "src/pages/accordionpage");

module.exports = {
  entry: {
    homepage: homepageJS,
    stickynavpage: stickynavpageJS,
    accordionpage: accordionpageJS
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
