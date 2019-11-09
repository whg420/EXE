#! /usr/bin/env node
const fs=require('fs')
// console.log(fs);
// fs.appendFileSync('index.js', '追加的数据');
// console.log('数据已追加到文件');
// const path=require('path')
// console.log(path);

// let fsPath=path.dirname('../fs_home/index.js');
// console.log(fsPath);
// ../fs_home读取到文件夹

// let fsPath=path.basename('../fs_home/index.js');
// console.log(fsPath);
// index.js读取到子文件

// let fsPath=path.extname('../fs_home/index.js');
// console.log(fsPath);
// .js读取到后缀名

// let fsPath=path.toNamespacedPath('../fs_home/index.js');
// console.log(fsPath);
// \\?\F:\高级Node\EXE\day4\fs操作\fs_home\index.js全路径

// let fsPath=path.normalize('../fs_home/index.js');
// console.log(fsPath);
// ..\fs_home\index.js 整体路径

// let fsPath=path.resolve('../fs_home/index.js');
// console.log(fsPath);
// F:\高级Node\EXE\day4\fs操作\fs_home\index.js 整体路径

// let fsPath=path.parse('../fs_home/index.js');
// console.log(fsPath);
// { root: '',
//   dir: '../fs_home',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index' }


// let fsPath=path.join('../fs_home/index.js');
// console.log(fsPath);
// ..\fs_home\index.js



// let fsPath=path.isAbsolute('../fs_home/index.js');
// console.log(fsPath);
// false
// path.isAbsolute() 方法检测 path 是否为绝对路径。

// 如果给定的 path 是零长度字符串，则返回 false。

var data = fs.readFileSync('fs_home/index.js');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");

// 异步打开文件
// console.log("准备打开文件！");
// fs.open('index.html', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//   console.log("文件打开成功！");     
// });


// console.log("准备打开文件！");
// fs.stat('fs_home', function (err, stats) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("读取文件信息成功！");
   
//    // 检测文件类型
//    console.log("是否为文件(isFile) ? " + stats.isFile());
//    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
// });