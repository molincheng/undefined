import Vue from 'vue'
import VueRouter from 'vue-router' //引入路由模块
import App from './App.vue'
import {routes} from './routes'

Vue.use(VueRouter)    //使用当前路由



const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    // return {x:0,y:100}
    // return {selector:'.btn'};

    if(savedPosition){
      return savedPosition;
    }else{
        return {x:0,y:0}
    }

  }
})


// // 全局守卫
// router.beforeEach(function(to,from,next){
//   // alert('你还没有登陆,请先登录!');

//   // 判断store.gettes.isLogin === false
//   if(to.path == '/login' || to.path == '/reglster'){
//     next();
//   }else{
//   alert('你还没有登陆,请先登录!');
//   }  
// })


// 后置钩子
// router.afterEach(function (to,from) {
//   alert("afert each")
// })





new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
