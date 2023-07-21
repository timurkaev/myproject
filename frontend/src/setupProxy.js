const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/n2o',
        createProxyMiddleware({
            // URL целевого сервера (локальный или удаленный)
            target: "http://localhost:8080",
            changeOrigin: true
        })
    );
};