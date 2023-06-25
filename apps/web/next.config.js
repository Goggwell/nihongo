const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname), "styles"],
    prependData: `@import "variables.module.scss";`,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
