const express = require('express')

// 后端解决跨域导入cors包
const cors = require('cors')

const zidingyi = require('./learn_express_center_use')

const app = express()

// 解决跨域
app.use(cors())

app.use(zidingyi)

app.use((err, req, res, next) => {
  console.log('发生了错误：' + err.message)
  res.send('发生了错误：' + err.message)
  next()
})

app.listen(3000, () => {
  console.log('自定义模块启动,http://localhost:3000')
})
