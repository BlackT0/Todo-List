/**
 * 该文件是整个项目的入口文件
 */
//引入Vue
import Vue from 'vue'
//引入App组件,它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//创建Vue实例对象---vm
new Vue({
  //将App组件放入容器中
  render: h => h(App),
  beforeCreate(){
    // 将$bus在Vue的原型对象上创建,并赋值为Vue
    Vue.prototype.$bus = this
  }
}).$mount('#app')
