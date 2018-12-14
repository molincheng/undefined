//一级路由
import Home from "./components/Home"
import Menu from "./components/Menu"
import Login from "./components/Login"
import Reglster from "./components/Reglster"
import About from "./components/about/About"
import Admin from "./components/Admin"


// 二级路由
import Contact from "./components/about/Contact"
import Delivery from "./components/about/Delivery"
import History from "./components/about/History"
import OrderingGuide from "./components/about/OrderingGuide"

//三级路由
import Phone from "./components/about/contact/Phone"
import PersonName from "./components/about/contact/PersonName"
// import { runInNewContext } from 'vm';

//实例化路由
 export const routes = [
    {path:'/',name:'homeLink',components:{
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }},
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/login',name:'loginLink',component:Login},
    {path:'/reglster',name:'reglsterLink',component:Reglster},
    {path:'/about',name:'aboutLink',redirect:'/contact',component:About,children:[
      {path:'/contact',name:'contactLink',redirect:'/personname',component:Contact,children:[
        {path:'/phone',name:'phoneNumber',component:Phone},
        {path:'/personname',name:'personName',component:PersonName}
        ]},
      {path:'/delivery',name:'deliveryLink',component:Delivery},
      {path:'/history',name:'historyLink',component:History},
      {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
    ]},
    {path:'/admin',name:'adminLink',component:Admin
    // ,beforeEnter:(to,from,next)=>{
      // 路由独享守卫
      // alert('非登录状态,不能访问!');
      // next(false);
      // if(to.path == '/login' || to.path == '/reglster'){
      //       next();
      //     }else{
      //     alert('你还没有登陆,请先登录!');
      //     }  
    // }
  },
    {path:'*',redirect:'/'}       //当路径输入不存在，跳转指点路径
  ]   //配置路由
  