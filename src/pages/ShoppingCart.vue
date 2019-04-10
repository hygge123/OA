<template>
    <div>
      我是购物车页面
        <div class="footerBar">
            <footerComponent :currentIndex="2"></footerComponent>
        </div>
    </div>
</template>

<script>
    import footerComponent from '@/components/footerComponent'
    export default {
        name: "ShoppingCart",
        components:{
            footerComponent
        },
    }
</script>

<style scoped>

</style>
