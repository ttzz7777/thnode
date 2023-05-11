const express = require('express')

const app = express()

const mw = (req, res, next) => {
  console.log('局部生效中间件函数1')
  req.startTime = new Date()
  next()
}

const mw1 = (req, res, next) => {
  console.log('局部生效中间件函数1')
  req.startTime = new Date()
  next()
}

app.get('/user', (req, res) => {
  console.log('调用user方法', req.startTime)
  res.send(req.startTime)
})

// 设置局部生效中间件
app.get('/', mw, (req, res) => {
  console.log('调用/方法', req.startTime)
  res.send(req.startTime)
})

// 设置多个局部生效中间件
app.get('/user/list1', mw, mw1, (req, res) => {
  console.log('调用/方法', req.startTime)
  res.send(req.startTime)
})

app.get('/user/list2', [mw, mw1], (req, res) => {
  console.log('调用/方法', req.startTime)
  res.send(req.startTime)
})

app.listen(8080, () => {
  console.log('服务启动http://127.0.0.1:8080')
})
