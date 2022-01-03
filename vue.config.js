const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, "CNAME"),
            to: path.join(__dirname, "dist"),
          },
        ],
      }),
    ],
  },
};
