<template>
    <div>
    我是我的页面
        <div class="footerBar">
            <footerComponent :currentIndex="3"></footerComponent>
        </div>
    </div>
</template>

<script>
    import footerComponent from '@/components/footerComponent'
    export default {
        name: "my-pre",
        components:{
            footerComponent
        }
    }
</script>

<style scoped>

</style>
