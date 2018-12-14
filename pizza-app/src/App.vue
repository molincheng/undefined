<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>

      <!-- 路由展示引入 -->  
      <div class="container">
        <router-view></router-view>
      </div>
      <br>
      <div class="container">
        <div class="row">
          <div class=" col-md-4">
            <router-view name="orderingGuide"></router-view>
          </div>
          <div class=" col-md-4">
            <router-view name="delivery"></router-view>
          </div>
          <div class=" col-md-4">
            <router-view name="history"></router-view>
          </div>
        </div>
      </div>

    </div> 
  
   
</template>

<script>
import  Header  from "./components/Header";
export default{
  components:{
    "app-header":Header
  }
}


</script>

<style>





</style>
