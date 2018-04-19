<template>
  <div class="detall">
      <MHeader :back="true">详情页</MHeader>
      <div class="mycontent">
          <ul>
            <li>
                <img :src="detallData.bookCover" :alt="detallData.bookName">
            </li>
            <li>
              <label for="bookname">书的名称:</label>
              <input type="text" v-model="detallData.bookName" id="bookname">
            </li>
            <li>
              <label for="bookinfo">书的信息:</label>
              <input type="text" v-model="detallData.bookInfo" id="bookinfo">
            </li>
            <li>
              <label for="bookprice">价格:</label>
              <input type="text" v-model.number="detallData.bookPrice">
            </li>
            <li>
              <button class="btn" @click="updatebook">修改</button>
            </li>
          </ul>
      </div>
  </div>
</template>
<script>
import {getDetall,updatebook} from '../api'
export default {
  created(){
      this.getBook();
  },
  computed:{
      Bid(){
        return this.$route.params.bid;
      }
  },
  data(){
    return {detallData:'',toget:false}
  },
  watch:{
      detallData:{
        handler(val,oldval){
            if(val!=oldval){
                this.toget=false;
            }else{
              this.toget=true;
            }  
        },
        deep:true
      }
  },
  methods:{
    async getBook(){
        this.detallData=await getDetall(this.Bid);
        if(!this.detallData){
          this.$router.push({name:'List'});
        }
        return;
    },
    async updatebook(){
      if(this.toget){
        await updatebook(this.Bid,this.detallData);
        this.$router.push({name:'List'})
      }
      return;  
    }
  },
  components:{
     MHeader:()=>import('@/base/MHeader'),
  }
}
</script>
<style lang="less" scoped>
    .detall{
      position: absolute;
      top:0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1000;
      background: #fff;
      ul{
        padding: 10px;
        li{
          margin: 5px 0;
          label{
            display: block;
          }
          input{
              padding: 2px;
              width: 100%;
          }
          .btn{
              width: 100%;
              border-radius: 3px;
          }
        }
      }
    }
</style>

