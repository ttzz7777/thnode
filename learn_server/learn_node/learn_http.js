const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  let url = req.url
  let method = req.method
  let str = `url地址${url},方法是${method}`
  let content = '<h1>404 Not found!</h1>'
  if (url === '/' || url === 'index.html') {
    content = '<h1>首页</h1>'
  } else if (url === '/about.html') {
    content = '<h1>关于页面</h1>'
  }
  res.setHeader('Content-Type', 'text/html;charset=UTF-8')
  // res.setHeader('Content-Type','application/json')
  res.end(content + str)
})

server.listen(8080, () => {
  console.log('server running at http://127.0.0.1:8080')
})
