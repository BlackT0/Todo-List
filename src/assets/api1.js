const express = require('express')
const app = express()
app.get('/car',function(request,response){
    let cars = [
        {
            brand:"阿斯顿马丁",
            cc:'1000匹',
            weight:1.5
        },
        {
            brand:"保时捷911",
            cc:'1100匹',
            weight:1.2
        },        {
            brand:"布加迪威龙",
            cc:'1300匹',
            weight:1.4
        },
    ]
    response.send(JSON.stringify(cars))
})
app.listen(9999,function(){
    console.log("端口9999已启动...");
})