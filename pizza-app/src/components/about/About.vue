<template>
    <div>
        <div class="row col-md-12">
            <div class="col-md-4">
                <!-- 导航 -->
                <div class=" list-group mb-5 nav">
                    <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
                        <a class="list-group-item list-group-item-action">历史订单</a>
                    </router-link>
                    <router-link tag='li' class="nav-link" :to="{name:'contactLink'}">
                        <a class="list-group-item list-group-item-action">联系我们</a>
                    </router-link>
                    <router-link tag='li' class="nav-link" :to="{name:'orderingGuideLink'}">
                        <a class="list-group-item list-group-item-action">点餐文档</a>
                    </router-link>
                    <router-link tag='li' class="nav-link" :to="{name:'deliveryLink'}">
                        <a class="list-group-item list-group-item-action">快递信息</a>
                    </router-link>
                </div>
            </div>
            <div class="col-md-8">
                <!-- 导航所对应的内容 -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style>
.col-md-4 .nav .nav-link{
    margin: 0px 0px 10px 0px;
}
</style>
