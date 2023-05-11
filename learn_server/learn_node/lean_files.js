const fs = require('fs')
const path = require('path')
// fs.readFile(__dirname + '/input.text', 'utf-8', (err, data) => {
//   if (err) {
//     return console.log('读取文件失败:' + err.message)
//   }
//   console.log('读取文件成功:' + data)
// })

// fs.writeFile(__dirname + '/input.text', '测试一', (err) => {
//   if (err) {
//     return console.log('读取文件失败：' + err.message)
//   }
//   console.log('文件写入成功')
//   console.log(__dirname)
// })

const pathStr = path.join(__dirname + '/input.text') // 路径拼接
console.log(pathStr)
let filename = path.basename(pathStr)
console.log(filename)
let newFileName = path.basename(pathStr, '.text') //路径文件名
console.log(newFileName)
let extname = path.extname(pathStr) // 扩展名
console.log(extname)
