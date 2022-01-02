import CopyPlugin from "copy-webpack-plugin";
import { join } from "path";

export const configureWebpack = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: join(__dirname, "CNAME"),
          to: join(__dirname, "dist"),
        },
      ],
    }),
  ],
};
