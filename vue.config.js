const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
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
