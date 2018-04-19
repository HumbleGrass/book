<template>
  <div class="home">
    <MHeader :back="false">首页</MHeader>
    <div class="mycontent">
        <Loding v-if="logind"></Loding>
        <template v-else>
            <Swiper :swiperSlides='slids'></Swiper> 
            <div class="book">
              <h3 class="bookTitle">热门图书</h3>
              <div class="bookConent">
                <ul>
                    <li v-for="(item,index) in books" :key="index">
                        <img :src="item.bookCover" :alt="item.bookName">
                        <p>{{item.bookName}}</p>
                    </li>
                </ul> 
              </div>
            </div>
        </template>
    </div>
  </div>
</template>
<script>
import {getall} from '../api'
export default {
    created(){
        this.getdata();
    },
    data(){
      return {slids:[],books:'',logind:true}
    },
    methods:{
      async getdata(){
        let [slids,books]=await getall();
        this.slids=slids;
        this.books=books.slice(-7,-1);
        setTimeout(()=>{
          this.logind=false;
        },1000) 
      },
    },
    components:{
      MHeader:()=>import('@/base/MHeader'),
      Swiper:()=>import('@/base/Swiper'),
      Loding:()=>import('@/base/Loding')
    }
}
</script>
<style lang="less" scoped>
  .home{
    .book{
      padding: 5px;
      .bookTktle{
        color: #999;
        padding: 5px 0;
      }
      .bookConent{
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            text-align: center;
            width: 50%;
            margin: 10px 0;
            img{
              width: 100%;
            }
            p{
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
</style>

