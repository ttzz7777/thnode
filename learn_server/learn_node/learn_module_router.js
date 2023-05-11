const express = require('express')

const route = express.Router()

// 添加get请求
route.get('/user/list', (req, res) => {
  console.log('GET请求参数', req.query)
  res.send(req.query)
})

// 添加post请求
route.post('/user/add', (req, res) => {
  console.log('POST请求参数', req.body)
  res.send(req.body)
})

module.exports = route
