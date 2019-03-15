<template>
    <div class="footer">
      <ul class="items">
        <li class="item"  v-for="(item,index) in items" @click="currentIndex=index">
          <router-link :to="item.path">
            <img :src=" currentIndex===index? item.url2:item.url1" alt="">
            <p class="item-text" :class="{active:currentIndex===index}">{{item.text}}</p>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "footerComponent",
      data(){
          return{
            items:[
              {path:'/',url1:require('@/assets/image/home@2x.png'),url2:require('@/assets/image/home_pre@2x.png'),text:'首页'},
              {path:'/class',url1:require("@/assets/image/classification@2x.png"),url2:require('@/assets/image/classification_pre@2x.png'),text:'分类'},
              {path:'/cart',url1:require("@/assets/image/shoppingcart@2x.png"),url2:require('@/assets/image/shopping cart_pre@2x.png'),text:'购物车'},
              {path:'/me',url1:require('@/assets/image/my@2x.png'),url2:require('@/assets/image/my_pre@2x.png'),text:'我的'},
            ],
            currentIndex:0
          }
      }
    }
</script>

<style scoped>
  .footer{
    width: 375px;
    background-color: #fff;
    border: 1px solid #ECECEC;
    padding: 6px 0px;
    /*position: fixed;*/
    /*bottom: 0px;*/
  }
  .items{
    width:100%;
    display: flex;
    justify-content:space-around;
  }
  .item{
    /*border: solid 1px red;*/
    text-align: center;
  }
.item img{
  width: 20px;
  height: 20px;
  /*vertical-align: middle;*/
}

  .item-text{
    font-size:10px;
    text-align: center;
    /*vertical-align: middle;*/
  }

  .active{
    color: #F39F17;
  }
</style>
