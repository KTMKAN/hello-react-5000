const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://192.168.0.72:9015',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
        })
    );
    app.use(
        '/api2',
        createProxyMiddleware({
            target: 'http://192.168.0.72:2000',
            changeOrigin: true,
            pathRewrite: {
                '^/api2': '',
            }
        })
    );
};