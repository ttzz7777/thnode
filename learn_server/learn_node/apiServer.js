const express = require('express')

const app = express()

// 导入apiRouter路由模块
const router = require('./apiRouter')

// 导入cors跨域模块
const cors = require('cors')

// 注册JSON中间件、解析URL-encoded中间件（内置中间件）\配置跨域中间件app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// 注册router中间件
app.use(router)

app.listen(3001, (req, res) => {
  console.log('api接口启动成功,http://localhost:3001')
})
