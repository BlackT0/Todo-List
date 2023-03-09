<template>
    <div>
        <transition name="hello" appear>
            <h1 v-show="isShow" @click="displayOrHidden">你好啊! Vue!</h1>
        </transition>

    </div>
</template>
<script>
export default {
    name: 'Test',
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        displayOrHidden() {
            this.isShow = !this.isShow
            setTimeout(() => {
                this.isShow = !this.isShow
            }, 2000)
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
