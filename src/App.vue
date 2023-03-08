<template>
  <div>
    <div id="app">
      <h1>Todo-List</h1>
      <my-header @getTask="getTask" />

      <my-list :todos="todos" />

      <my-footer :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />

      <!-- <test @show="show" /> -->
      <!-- 使用.native时间修饰符可绑定原生的自定义方法 -->
      <!-- <test @click.native="show" /> -->
    </div>
    <test ref='test' />
  </div>
</template>

<script>
//引入pubsub消息订阅与发布
import pubsub from 'pubsub-js'
//自定义组件
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import Test from './components/Test.vue'


export default {
  name: 'App',
  components: { MyHeader, MyList, MyFooter, Test },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  mounted() {
    // 第二种绑定自定义方法 通过ref属性获得组件然后通过$on方法来绑定组件自定义方法
    // this.$refs.test.$once('show', this.show)
    this.$bus.$on('checkTodo', this.checkTodo)
    // this.$bus.$on('deleteTodo', this.deleteTodo)
    this.deleteId = pubsub.subscribe('deleteTodo', this.deleteTodo)
    this.updateId = pubsub.subscribe('updateTodo', this.updateTodo)
  },
  beforeDestroy() {
    //当组件被销毁之前 解绑自定义事件
    this.$bus.$off(['checkTodo', 'deleteTodo'])
    //取消订阅消息
    pubsub.unsubscribe(this.deleteId)
  },
  methods: {
    //添加一个todo
    getTask(obj) {
      this.todos.push(obj)
    },
    //勾选or取消勾选一个
    checkTodo(id) {
      this.todos.forEach(todo => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    //删除一个todo
    deleteTodo(_, id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    //全选or全不选
    checkAllTodo(done) {
      this.todos.forEach(todo => {
        todo.done = done
      })
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter(todo => {
        return todo.done !== true
      })
    },
    //编辑todo
    updateTodo(_, obj) {
      this.todos.forEach(todo => {
        if (todo.id === obj.id) todo.title = obj.data
      })
    },
    //将数据存到localStorage
    setItem(obj) {
      localStorage.setItem('todos', JSON.stringify(obj.map(todo => todo)))
    },
    //自定义事件 练习案例 (可删)
    show() {
      alert(123)
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(val) {
        this.setItem(val)
      }
    }
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

#app {
  padding: 15px;
  position: fixed;
  top: 150px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 500px;
  border: 1px solid #dddddd;
  border-radius: 10px;

  h1 {
    margin: 0 0 15px 0;
    text-align: center;
  }
}
</style>
