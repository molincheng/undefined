<template>
    <div class="card">
        <div class="list-group-item">联系我们</div>
        <div class="list-group-item">
            <h4 class="card-title">联系我们</h4>
            <p class="card-text">1030658764@qq.com</p>

             <router-link :to="{name:'phoneNumber'}">电话</router-link>
            <router-link :to="{name:'personName'}">联系人</router-link>
            <router-view></router-view>
        </div>
       

    </div>
</template>
