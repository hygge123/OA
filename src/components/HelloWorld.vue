<template>
  <div class="box">
    <div class="block1 block">
      <img src="@/assets/image/banner.png" alt="" class="block1-banner1">
      <div class="block1-banner2-box">
        <ul class="block1-banner2">
          <li v-for="item in imgs" class="block1-item">
            <img :src="item.url" alt="" class="block1-item-img">
            <p class="block1-item-name">{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div class="block1-banner3">
        <img class="block1-banner3-img" src="@/assets/image/broadcast@2x.png" alt=""><span class="block1-banner3-text">羊奶传奇App即将上线</span>
      </div>
    </div>
    <div class="block2 block">
      <div class="block2-left">
        <van-swipe :autoplay="3000" :width="150">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image.url" class="turnImg"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="block2-right">
        <div class=" three1">
          <img src="@/assets/image/three1.png" alt="">
        </div>
        <div class="three2">
          <img src="@/assets/image/three2.png" alt="" >
          <img src="@/assets/image/three2.png" alt="" >
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        imgs:[
          {url:require("@/assets/image/home_Coupon@2x.png"),name:'优惠券'},
          {url:require("@/assets/image/home_Receiving Management@2x.png"),name:'收货管理'},
          {url:require("@/assets/image/home_Wallet@2x.png"),name:'钱包'},
          {url:require("@/assets/image/home_Distribution@2x.png"),name:'分销信息'},
          {url:require("@/assets/image/home_Order Management@2x.png"),name:'订单管理'}
        ],
        images:[
          {url: require('@/assets/image/turn1.png')},
          {url: require('@/assets/image/turn1.png')},
          {url: require('@/assets/image/turn1.png')},
          {url: require('@/assets/image/turn1.png')}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    background-color: #ECECEC;
    padding-bottom: 40px;
  }
  .block1-banner1{
    width: 100%;
    height: auto;
  }
  .block1-banner2-box{
    width: 100%;
    margin: 0 auto;

    background-color: #fff;
  }
  .block1-banner2{
    display: flex;justify-content: space-around;

  }
  .block1-item{
    border: 1px solid transparent;
  }
  .block1-item-img{
    width: 42px;
    height: 42px;
    vertical-align: middle;
  }
  .block1-item-name{
    font-size: 8px;
    text-align: center;
    vertical-align: middle;
  }
  .block1-banner3{
    height: 30px;
    line-height: 30px;
    display: flex;
    align-items:center;
    border:1px solid #EDEDED;
    background-color: #fff;
  }
  .block1-banner3-img{
    width: 20px;
    height: 20px;
    margin-left:14px;

  }
  .block1-banner3-text{
    font-size: 8px;
    color: #F6A126;
    margin-left: 10px;

  }
  .block2{
    width:100%;
    display: flex;
    margin:6px 0  ;
  }
  .turnImg{
    width: 100%;
  }
  .block2-left{
    width: 40%;
  }
  .block2-right{
    width: 60%;
    height: 163.39px;
  }
  .three2{
    display: flex;
  }
  .three1 img{
    width: 225px;
    height: 82px;
  }
  .three2 img{
    width: 50%;
    height: 76px;

  }
</style>
