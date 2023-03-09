const express = require('express')
const app = express()
app.get('/student',function(request, response){
    let students = [
        {
            id:2000,
            name:'张三',
            age:21
        },
        {
            id:2040,
            name:'李四',
            age:25
        },
        {
            id:2030,
            name:'王五',
            age:23
        },
    ]
    console.log('学生信息接口被调用...');
    response.send(JSON.stringify(students))
})
app.listen(8888,function(){
    console.log(`端口:8888已启动...`);
})