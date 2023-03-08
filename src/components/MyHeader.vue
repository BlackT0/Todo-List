<template>
    <div class="inpBox">
        <input type="text" class="inp" placeholder="请输入你的任务名称,按回车键确认" v-model="title" @keyup.enter="add">
    </div>
</template>
<script>
//随机生成不重复的id库
import { nanoid } from 'nanoid'
export default {
    name: 'MyHeader',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        add() {
            if (!this.title.trim()) return alert('输入不能为空!')
            const todoObj = {
                id: nanoid(),
                title: this.title,
                done: false
            }
            this.$emit('getTask', todoObj)
            this.title = ''
        }
    }
}
</script>
<style lang='less' scoped>
.inpBox {
    width: 100%;

    .inp {
        padding-left: 15px;
        width: 500px;
        height: 45px;
        line-height: 45px;
        box-sizing: border-box;
        font-size: 16px;
        border: 1px solid #ddd;
        border-radius: 3px;

        &:focus {
            background: #FFFFFF;
            outline: none;
            /* 解决input按钮自动填充后 浏览器渲染的默认背景问题 */
            box-shadow: 0 0 2px 2px skyblue;
        }

        &::placeholder {
            font-size: 16px;
            color: #ddd;
        }


    }


}
</style>
