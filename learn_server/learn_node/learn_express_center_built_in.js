// express.static 快速托管静态资源的内置中间件，例如:HTML文件、图片、CSS样式等
// express.json 解析JSON格式的请求体数据
// exoress.urlencoded 解析URL-encoded格式的请求体数据
const express = require('express')

const app = express()

// Body参数，json参数
app.use(express.json())
// Body参数,x-www-form-urlencoded参数
app.use(express.urlencoded({ extended: false }))

app.post('/user/add', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})
app.use((err, req, res, next) => {
  console.log(err.message)
  res.send(err.message)
  next()
})
//启动服务
app.listen(8080, () => {
  console.log('express内置中间件启动成功http://127.0.0.1:8080')
})
