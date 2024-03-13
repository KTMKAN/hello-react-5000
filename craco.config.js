const path = require("path");

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            const alias = webpackConfig.resolve.alias || {};
            Object.assign(alias, {
                "@": path.resolve(__dirname, "."),
                "@src": path.resolve(__dirname, "./src")
            });
            webpackConfig.resolve.alias = alias;

            return webpackConfig;
        },
    },
};
