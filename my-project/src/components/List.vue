<template>
  <div class="list">
    <MHeader>列表页</MHeader>
    <div class="mycontent" ref="myscroll" @scroll="loadmore">
        <ul>
            <li v-for="(item,index) in books" :key="index" @click="todetall(item.bookId)">
              <img alt="item.bookName" v-lazy='item.bookCover'>
              <div class="bookcontent">
                  <h4 class="bookname">{{item.bookName}}</h4>
                  <p class="bookinfo">{{item.bookInfo}}</p>
                  <b class="bookprice">{{item.bookPrice | my-price}}</b>
                  <button class="removebtn" @click.stop="removebook(item.bookId)">删除</button>
              </div>
            </li>
            <li v-show='isshow'>疯狂加载中</li>
            <li v-if="false">
                <button class="btn btn-info btn-block" @click="morebook">加载更多</button>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import {pagetion,removebook} from '../api'
export default {
    components:{
      MHeader:()=>import('@/base/MHeader'),
    },
    created(){
      this.getBooks();
    },
    data(){
      return {books:[],offset:0,isget:true,isshow:false};
    },
    methods:{
      morebook(){
        this.getBooks();
      },
      async getBooks(){
        console.log(await pagetion(this.offset))
        if(await pagetion(this.offset)){
            this.books=[...this.books,...await pagetion(this.offset)];
            this.offset=this.books.length;
            this.isshow=false;
        } 
          this.isshow=true;
      },
      async removebook(id){
        this.books=await removebook(id);
      },
      todetall(id){
        this.$router.push({name:'Detall',params:{bid:id}})
      },
      loadmore(){
        clearTimeout(this.timer)
        this.isshow=true;
        this.timer=setTimeout(()=>{
            console.log(123)
            let {scrollTop,clientHeight,scrollHeight}=this.$refs.myscroll;
              console.log(scrollTop,clientHeight,scrollHeight);
                if(scrollTop+clientHeight+50>=scrollHeight){
                  console.log(222222222222)
                  this.morebook(); 
                }  
        },1000)
      }
    }
}
</script>
<style lang="less" scoped>
  *{box-sizing: border-box}
  .mycontent{
    height: 500px;
  }
  .list{
    ul{
      padding: 10px;
    }
    li{
      margin: 1rem 0;
      display: flex;
      img{
        width: 40%;
      }
      .bookcontent{
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 10px;
        .bookinfo{
          color:#2a2a2a;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .bookprice{
          color: red;
        }
        .removebtn{
          width: 3rem;
          border-radius: .3rem;
          padding: 0;
          background: orange;
          color: red;
          outline: none;
          border: none;
        }
      }
    }
  }
</style>

