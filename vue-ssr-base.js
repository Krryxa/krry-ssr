const Vue = require('vue')
const server = require('express')()
const template = require('fs').readFileSync('./index.template.html', { encoding: 'utf-8' })
const renderer = require('vue-server-renderer').createRenderer({
  template
})

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>Hello Word！你的访问路由是：{{ url }}</div>`,
  })
  renderer
  .renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html);
  })
})

server.listen(3000, () => {
  console.log('server is listening in 3000')
})