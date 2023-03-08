<template>
    <div class="listBox">
        <ul class="uLis">
            <my-item v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
        </ul>
    </div>
</template>
<script>
import MyItem from './MyItem.vue'
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
</style>
