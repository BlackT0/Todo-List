<template>
    <li class="uLi">
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
        <span :class="{ 'lineThrough': todo.done }" v-show="!todo.isEdit">{{ todo.title }}</span>
        <input ref='editText' type="text" :value="todo.title" v-show="todo.isEdit" @blur="handleBlur(todo)"/>
        <button @click="handleDelete(todo.id)">删除</button>
        <button @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
    </li>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
    name: 'MyItem',
    props: ['todo'],
    methods: {
        //勾选or取消勾选
        handleCheck(id) {
            //通知App组件将对应的todo对象的done值取反
            this.$bus.$emit('checkTodo', id)
        },
        //删除
        // handleDelete(id) {
        //     if (confirm('你确定删除吗?')) {
        //         this.$bus.$emit('deleteTodo', id)
        //     }
        // }
        //发布订阅消息_删除
        handleDelete(id){
            if(confirm('你确定删除吗?')){
                //发布订阅消息, 消息名为deleteTodo publish函数有两个参数 第一个参数是参数名, 第二个参数是传的数据
                pubsub.publish('deleteTodo', id)
            }
        },
        handleEdit(todo){
            if(todo.hasOwnProperty('isEdit')){
                todo.isEdit = true
            }else{
                this.$set(todo, 'isEdit', true)
            }
            this.$nextTick(() => {
                this.$refs.editText.focus()
            })
        },
        //失去焦点时发送数据
        handleBlur(todo){
            todo.isEdit=false
            pubsub.publish('updateTodo',{id:todo.id,data:this.$refs.editText.value})
        }
    }
}
</script>

<style lang='less' scoped>
.uLi {
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    line-height: 45px;
    border: 1px solid #ddd;
    border-bottom: 0;

    &:hover {
        background-color: #ddd;
    }


    input[type='checkbox'],
    span {
        margin-left: 8px;
        font-size: 16px;
    }

    .lineThrough {
        text-decoration: line-through;
        color: #ddd;
    }

    button {
        display: none;
        margin-top: 4px;
        margin-right: 5px;
        float: right;
        padding: 0 18px;
        border-radius: 5px;
        background: red;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        border: 0;
        box-sizing: border-box;
        height: 35px;
        line-height: 30px;
        vertical-align: baseline;
        &:hover{
            opacity: 0.6;
            box-shadow: 0 0 2px 2px rgba(0, 0, 0, .3);
        }
    }
    button:last-child{
        background-color: skyblue;
    }

    &:hover button {
        display: block;
    }

}

.active {
    background-color: rgba(0, 0, 0, .3);
}
</style>
