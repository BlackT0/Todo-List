<template>
    <div class="footerBox" v-if="total">
        <input type="checkbox" v-model="isAll">
        已完成<span>{{ doneTotal }}</span> / 全部<span>{{ total }}</span>
        <button @click="clearAll">清除已完成任务</button>
    </div>
</template>
<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    methods: {
        clearAll() {
            if (confirm('你确认要清除全部已完成的任务吗?'))
                this.$emit('clearAllTodo')
        }
    },
    computed: {
        total() {
            return this.todos.length
        },
        doneTotal() {
            return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        },
        isAll: {
            get() {
                if (this.todos.length) return this.doneTotal === this.total
            },
            set(value) {
                this.$emit('checkAllTodo', value)
            }
        }
    }
}
</script>
<style lang='less' scoped>
.footerBox {
    margin: 10px 0 0 0;
    width: 100%;
    height: 50px;
    line-height: 50px;

    input[type='checkbox'] {
        margin: 0 15px;
    }

    button {
        // display: none;
        margin-top: 7.5px;
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
    }

    .active {
        display: block;
    }
}
</style>
