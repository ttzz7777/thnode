const express = require('express')
// 1.创建一个路由容器
const router = express.Router()

// 2.编写接口
router.get('/get', (req, res) => {
  // 获取req.query查询参数
  const query = req.query
  res.send({
    code: 200,
    message: 'GET查询成功',
    data: query,
  })
})

router.post('/post', (req, res) => {
  // 获取body参数
  const body = req.body
  res.send({
    code: 200,
    message: 'POST提交成功',
    data: body,
  })
})

module.exports = router
