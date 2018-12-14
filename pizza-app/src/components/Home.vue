<template>
    <div>
        <div id="home" class="col-sm-12 text-center" >
            <div class="background">
                <h1>欢迎品尝pizza!</h1>
                <h2>这里有你非常喜欢的pizza!</h2>
                <button @click="goToMeun" class="btn btn-success">Lest is order!</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goToMeun(){
            // 跳转到上一次浏览的页面
            // this.$router.go(-1);      
            
            // 跳转指定的地址
            // this.$router.replace('/login')

            // 指定跳转路由的名字下
            // this.$router.replace({name:'reglsterLink'})

            // 通过push进行跳转
            // this.$router.push('/about')
            this.$router.push({name:'loginLink'})
        }
    }
}
</script>
<style>
#home{
    background:url('../../src/assets/123.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 85vh;
    padding: 10%;
}
h1,h2{
    margin: 6%;
}
.background{
    background: #eee;
    opacity: 0.7;
    padding: 20px 0;
    margin: 0 auto;
    max-width: 70vw;
}
</style>
