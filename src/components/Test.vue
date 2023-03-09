<template>
    <div>
        <transition name="hello" appear>
            <h1 v-show="isShow" @click="displayOrHidden">你好啊! Vue! 我现在同时也在学习Git命令.</h1>
        </transition>
        <button @click="stus">获取学生</button>
        <button @click="cars">获取汽车</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Test',
    data() {
        return {
            isShow: true,
        }
    },
    methods: {
        displayOrHidden() {
            this.isShow = !this.isShow
            setTimeout(() => {
                this.isShow = !this.isShow
            }, 2000)
        },
        stus() {
            axios.get('/student').then(result => console.log(result.data))
        },
        cars() {
            axios.get('/car').then(result => console.log(result.data))
        }
    }
}
</script>
<style lang='less' scoped>
h1 {
    background-color: orangered;
    text-align: center;
}

.hello-enter-active {
    animation: abc 0.5s linear;
}

.hello-leave-active {
    animation: abc 0.5s linear reverse;
}

@keyframes abc {
    from {
        transform: translate(-100%);
    }

    to {
        transform: translate(0px);
    }
}
</style>
