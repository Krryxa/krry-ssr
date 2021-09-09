const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const server = express();

const template = require('fs').readFileSync('./public/index.template.html', { encoding: 'utf-8' });

const renderer = require('vue-server-renderer').createRenderer({
  template,
});

const app = require('./dist/bundle.server.js').default // 导入 Vue 实例工厂函数

server.use(express.static('./dist')); // 设置静态目录
server.use('/krryblog', createProxyMiddleware({ // 解决客户端访问跨域问题
	target: 'https://ainyi.com',
	changeOrigin: true
}));

server.get('*', async (req, res) => {
  const context = { // 设置上下文，里面包含路由，用于传递给 Vue 实例工厂函数
    url: req.url
  }

  let htmlStr = ''
  await app(context).then( res => { // 工厂函数生成 Vue 实例，并传递给 renderer 生成字符串
    renderer.renderToString(res, context, (err, html) => {
      if(!err){
        htmlStr = html
      }
    })
  })
  res.end(htmlStr)
})

server.listen(3002, () => {
  console.log('server is listening in 3002')
})
