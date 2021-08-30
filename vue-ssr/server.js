const express = require('express');
const server = express();

const template = require('fs').readFileSync('./public/index.template.html', { encoding: 'utf-8' });

const renderer = require('vue-server-renderer').createRenderer({
  template,
});

const app = require('./dist/bundle.server.js').default    //导入Vue实例工厂函数

const contextTemp = {
    title: 'vue ssr',
    meta: `
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
    `,
};

server.use(express.static('./dist'));

server.get('*', async (req, res) => {
  const context = {                   //获取路由，用于传递给Vue实例
    url: req.url
  }

  let htmlStr = ''
  await app(context).then( res => {    //生成Vue实例，并传递给renderer实例生成字符串
    renderer.renderToString(res, contextTemp, (err, html)=>{
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
