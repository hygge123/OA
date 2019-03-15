<template>
   <div id="app">

    <router-view/>
     <div class="footer">
       <footerComponent></footerComponent>
     </div>
  </div>
</template>
<script>
  import footerComponent from '@/components/footerComponent'
export default {
  name: 'App',
  data(){
    return{
      active:0
    }
  },
  components:{
    footerComponent
  }
}
</script>

<style>
#app{

}
  .footer{
    position: fixed;
    bottom: 0;
    z-index: 2;
  }
</style>
