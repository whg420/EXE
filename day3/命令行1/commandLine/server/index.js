 const express = require('express')
const app = express()
// 当前工作目录
app.use(express.static(process.cwd()))
module.exports=app;