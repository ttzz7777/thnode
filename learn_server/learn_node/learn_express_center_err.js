const express = require('express')

const app = express()

app.get('/', (res, req) => {
  throw new Error('服务器内部发生了错误！')
  res.send('Home Page...')
})

// 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
// 错误级别中间件的function处理函数中，必须有4个形参，形参顺序从前到后，分别是(err,req,res,next)
// 错误级别的中间件，放到所有路由请求之后
app.use((err, req, res, next) => {
  console.log('发生了错误！' + err.message)
  res.send('Error:' + err.message)
  next()
})

app.listen(8080, () => {
  console.log('Express server running at http://127.0.0.1:8080')
})
