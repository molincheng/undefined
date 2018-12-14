<template>
    <header>
        <nav class="navbar navbar-default navbar-light">
    <!-- Brand and toggle get grouped for better mobile display -->
      <router-link to="/" class="py-2 navbar-brand">
          <svg xmlns="http://www.w3.org/2000/svg"  class="d-block mx-auto" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" /><line x1="14.31" y1="8" x2="20.05" y2="17.94" /><line x1="9.69" y1="8" x2="21.17" y2="8" /><line x1="7.38" y1="12" x2="13.12" y2="2.06" /><line x1="9.69" y1="16" x2="3.95" y2="6.06" /><line x1="14.31" y1="16" x2="2.83" y2="16" /><line x1="16.62" y1="12" x2="10.88" y2="21.94" /></svg>
        </router-link>
    <router-link to="/" class="navbar-brand">Pizza点餐系统</router-link >
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link :to="{name:'homeLink'}">{{navTitle[0]}}</router-link></li>
        <li><router-link :to="{name:'menuLink'}">{{navTitle[1]}}</router-link></li>
        <li><router-link :to="{name:'adminLink'}">{{navTitle[2]}}</router-link></li>
        <li><router-link :to="{name:'aboutLink'}">{{navTitle[3]}}</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><router-link :to="{name:'loginLink'}">{{navTitle[4]}}</router-link></li>
        <li><router-link :to="{name:'reglsterLink'}">{{navTitle[5]}}</router-link></li>
      </ul>
 </div>
</nav>
        
    </header>
</template>
<script>
export default {
    data(){
        return{
           navTitle:['主页','菜单','管理','联系我们','登录','注册']
        }
    }
}
</script>
