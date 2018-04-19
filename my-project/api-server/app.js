var path = require('path')
var express = require('express')
var mockjs = require('express-mockjs')
var router=express.Router()

var app = express()

// 使用默认路径 '/'（不推荐）
// app.use(mockjs(path.join(__dirname, 'mocks')))

// 自定义路径 '/api'
app.use('/api', mockjs(path.join(__dirname, 'mocks')))

// 这里可以添加你的自定义代码.
// router.param('id',(req,res,next,id)=>{
//     next();
// })
// router.route('/api/book/:id')
//     .get((req,res)=>{
//         res.send('get')
//     })
//     .post((req,res)=>{
//         res.send('post')
//     })
//     .put((req,res)=>{
//         res.send('put')
//     })
//     .delete((req,res)=>{
//         res.send('delete')
//     })
// app.use(router)
app.listen(8898);