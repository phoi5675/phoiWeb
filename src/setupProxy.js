const { createProxyMiddleware } = require('http-proxy-middleware');
// TODO: proxy error when build :(
module.exports = function(app){
  app.use(
      createProxyMiddleware('/webpage', {
          target: 'http://phoiweb.com:8880',
          changeOrigin: true
      })
  )
};