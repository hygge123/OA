<template>
  <div class="box">
    <div class="search-box">
      <van-search placeholder="中老年人羊奶粉" v-model="value" />
      <!--{{currentIndex}}-->
    </div>
    <div class="classBlock">
      <div class="menu" ref="menuWrapper">
        <ul class="menuList">
          <li class="menu-item" v-for="(menu,index) in menus"
              :key=index
              @click="selectMenu(index,$event)"
          >
            <span :class="[{active:currentIndex===index},{isfirst:index===0}]"  class="memu-text">{{menu.name}}</span></li>
        </ul>
      </div>
      <div class="showList" ref="showListWrapper">
        <ul>
            <li v-for=" (items,index) in showList " ref="goodsList">
              <div class="items">
                  <img :src="items.bannerUrl" alt="" class="banner">
                  <div class="title">
                    <span class="line"></span>
                    <span class="text">{{items.name}}{{index}}</span>
                    <span class="line"></span>
                  </div>
                  <div class="goods-flex-box" >
                    <ul class="goodsList" >
                      <li class="goods-item" v-for="goods in items.goods">
                        <img :src="goods.url" alt="" class="goodsImg">
                        <p class="goods-name">{{goods.name}}</p>
                      </li>
                    </ul>
                  </div>
              </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from'better-scroll'
  export default {
    name: "Classfication",
    data() {
      return {
        value: '',
        menus: [
          {name: '新品'},
          {name: '1段奶粉'},
          {name: "2段奶粉"},
          {name: "3段奶粉"},
          {name: "4段奶粉"},
          {name: "青少年奶粉"},
          {name: "老年人奶粉"},
        ],
        showList:[
          {
                bannerUrl: require('@/assets/image/banner.png'), name: '羊奶粉',
                goods: [
                  {url: require("@/assets/image/奶粉.png"), name: '青少年'},
                  {url: require("@/assets/image/奶粉.png"), name: '青少年'},
                  {url: require("@/assets/image/奶粉.png"), name: '青少年'},
                  {url: require("@/assets/image/奶粉.png"), name: '青少年'},
                  {url: require("@/assets/image/奶粉.png"), name: '青少年'},
                  {url: require("@/assets/image/奶粉.png"), name: '青少年'}
                ]
              },
          {
            bannerUrl: require('@/assets/image/banner.png'), name: '羊奶粉',
            goods: [
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'}
            ]
          },
          {
            bannerUrl: require('@/assets/image/banner.png'), name: '羊奶粉',
            goods: [
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'}
            ]
          },
          {
            bannerUrl: require('@/assets/image/banner.png'), name: '羊奶粉',
            goods: [
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'}
            ]
          },
          {
            bannerUrl: require('@/assets/image/banner.png'), name: '羊奶粉',
            goods: [
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'}
            ]
          },
          {
            bannerUrl: require('@/assets/image/banner.png'), name: '羊奶粉',
            goods: [
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'}
            ]
          },
          {
            bannerUrl: require('@/assets/image/banner.png'), name: '羊奶粉',
            goods: [
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'},
              {url: require("@/assets/image/奶粉.png"), name: '青少年'}
            ]
          },
        ],
        // currentIndex: 0,
        scrollY: 0,
        heightList:[]

      }
    },
    mounted(){
        this.menuScroll=new BScroll(this.$refs.menuWrapper,{
          click:true
        });
        this.goodsScroll = new BScroll(this.$refs.showListWrapper,{
          probeType:3
        });
        this.goodsScroll.on("scroll",(pos)=>{
          this.scrollY =Math.abs(Math.round(pos.y))
        });
      this._calheight();

    },
    methods:{
        _calheight(){
          let goodsList = this.$refs.goodsList;
          let height  = 0;
          this.heightList.push(height);
          for(let i =0; i<goodsList.length;i++){
              height+=goodsList[i].clientHeight;
              this.heightList.push(height);
          }
          // console.log(this.heightList)

        },
        selectMenu(index,event){
          if(!event._constructed) {
            return ;
          }
          let goodsList = this.$refs.goodsList;
          let el = goodsList[index];
          this.goodsScroll.scrollToElement(el,300);
        }
    },
    computed:{
      currentIndex(){
        for( let i=0 ;i<=this.heightList.length;i++){
          let  height1 = this.heightList[i];
          let  height2 = this.heightList[i+1];
          if(this.scrollY >= height1 && this.scrollY < height2){
            return i ;
          }
        }
      }
    }
  }
</script>

<style scoped>
  .box{
    padding-bottom: 50px;
  }
  .classBlock{
    display: flex;
    /*justify-content: space-between;*/
    border: 1px solid #F0F0F0;
  }
  .menu{
    width: 24%;
    text-align: center;
    border: 1px solid #F0F0F0;
    border-bottom: 1px solid transparent;
  }
  .menu-item{
    padding: 20px 6px;
  }
  .memu-text{
    font-size: 14px;
  }
  .active{
    color:#F5B54F
  }
  .isfirst{
    font-size: 20px;
  }
  .menuList{
  }
  .showList{
    width: 76%;
    height: 461px;
    overflow: hidden;
  }

  .items{

    padding: 8px;
    text-align: center;
  }
  .banner{
    width: 100%;
    height: auto;
  }
  .goods-flex-box{
  }
  .title{
    text-align: center;
  }
  .title .line{
    display: inline-block;
    width:60px;
    border-top:1px solid #C6C6C6;
  }
  .title .text{
    /*此处记录一下 vertical-align 的用处*/
    vertical-align: -4px;
  }
  .goodsList{
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    width: 100%;
  }
  .goods-item{
    width:30%;
    margin: 20px 0 ;
  }
  .goodsImg{
    width: 100%;
  }
  .goods-name{
    font-size: 14px;
  }
</style>
