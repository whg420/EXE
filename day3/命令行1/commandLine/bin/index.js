#!/usr/bin/env node
let app=require('../server/index')
const  port=process.argv[2]&&process.argv[3]?process.argv[3]:8080;
let {version}=require('../package.json')

if(process.argv[2]==='-v'){
    console.log(version)
}else{
    app.listen(port, () =>console.log(`启动成功`,port))
}
