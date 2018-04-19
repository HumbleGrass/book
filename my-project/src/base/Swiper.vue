<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index" autoplay>
      <!-- I'm Slide {{ slide }} -->
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:{
            autoplay:true,
            delay:3000,
          },
          loop:{
            loop:true
          }
        },
      }
    }
  }
</script>
<style lang="less" scoped>
  img{width: 100%;height: 12rem}
</style>
