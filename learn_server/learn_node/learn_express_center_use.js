const express = require('express')
const app = express()

const qs = require('querystring')

app.use((req, res, next) => {
  // 定义变量
  let str = ''

  //开始
  req.on('data', (chunk) => {
    str += chunk
  })

  req.on('end', () => {
    // 将字符串转对象a
    const parsedUrlQuery = qs.parse(str)
    // 对象设置body参数
    req.body = parsedUrlQuery

    next()
  })
})

// 挂载请求
app.post('/user/add', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

module.exports = app
