const express = require('express')

const app = express()

// 创建中间件函数
app.use((req, res, next) => {
  console.log('第一个中间件方法')
  next()
})

// 可以使用app.use()连续定义多个全局中间件。客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用
app.use((req, res, next) => {
  console.log('第二个中间件方法')
  next()
})

// 挂载方法
// 挂载GET http://127.0.0.1:8080/
app.get('/', (req, res) => {
  console.log('调用了/ 路由方法')
  res.send('Home Page...')
})
// 挂载GET http://127.0.0.1:8080/user
app.get('/user', (req, res) => {
  console.log('调用了user 路由方法')
  res.send('User Page...')
})

// 通过app.use()  app.get()  app.post()，绑定到app实例上的中间件，叫做应用级别的中间件

// 绑定到express.Route()实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。只不过，应用级别中间件是绑定到app实例上，路由级别中间件绑定到router实例上。

// 启动服务
app.listen(8080, () => {
  console.log('启动服务器http://127.0.0.1:8080')
})
