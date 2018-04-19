<template>
      <div class="add">
      <MHeader :back="true">添加页</MHeader>
      <div class="content">
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
              <input type="number" v-model.number="detallData.bookPrice">
            </li>
            <li>
              <button class="btn" @click="addbook">添加</button>
            </li>
          </ul>
      </div>
  </div>
</template>
<script>
import {addbook} from '../api'
export default {
    components:{
      MHeader:()=>import('@/base/MHeader'),
    },
    data(){
      return {detallData:{}}
    },
    methods:{
      async addbook(){
        await addbook(this.detallData);
        this.$router.push({name:'List'})
      }
    }
}
</script>
<style lang="less" scoped>
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
</style>

