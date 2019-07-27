const path = require("path");
const homepageJS = path.resolve(__dirname, "src/pages/homepage");

module.exports = {
  entry: {
    "home.min": homepageJS
  },
  output: {
    filename: "[name].js"
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
