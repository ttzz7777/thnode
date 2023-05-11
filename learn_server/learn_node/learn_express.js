const express = require('express')

const router = require('./learn_module_router')

const app = express()

// 测试GET请求，获取参数
// app.get('/user/:id/:name', (req, res) => {
//   let arrData = []
//   let params = req.params
//   let query = req.quer
//   arrData.push(params)
//   arrData.push(query)
//   res.send(arrData)
// })

// 测试POST请求，获取参数
// app.post('/user', (req, res) => {
//   res.send('请求成功')
// })

/* 
  app.use()就是用来注册全局中间件的
  加载router模块，添加不固定前缀api
  GET  http://localhost:8080/api/user/list?aaa=123
  POST http://localhost:8080/api/user/add
*/
app.use('/api', router)

app.listen(8080, () => {
  console.log('express server running at http://localhost:8080')
})
