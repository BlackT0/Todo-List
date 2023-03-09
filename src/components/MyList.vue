<template>
    <div class="listBox">
        <ul class="uLis">
            <transition-group name="animate__animated animate__bounce" enter-active-class="animate__lightSpeedInRight"
                leave-active-class="animate__lightSpeedOutLeft">
                <my-item v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
            </transition-group>
        </ul>
    </div>
</template>
<script>
import MyItem from './MyItem.vue'
import 'animate.css';
export default {
    name: 'MyList',
    props: ['todos'],
    components: { MyItem },
}
</script>
<style lang='less' scoped>
.listBox {
    margin-top: 20px;
    width: 100%;
    border-bottom: 1px solid #ddd;

    .uLis {
        width: 100%;
        list-style: none;
    }
}

.todo-enter-active {
    animation: abc 0.5s linear;
}

.todo-leave-active {
    animation: abc 0.5s linear reverse;
}

@keyframes abc {
    from {
        transform: translate(-100%);
    }

    to {
        transform: translate(0);
    }
}
</style>
