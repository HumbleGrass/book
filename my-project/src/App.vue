<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive v-if="$route.meta.keeplive">
        <router-view></router-view>
      </keep-alive>
    </transition>
  <transition name="fadeIn">
      <keep-alive v-if="!$route.meta.keeplive">
          <router-view></router-view>
      </keep-alive>
  </transition>
    
    <tab></tab>
  </div>
</template>

<script>
import tab from '@/base/Tab'
export default {
  name: 'App',
  components:{tab}
}
</script>

<style>
    *{
      box-sizing: border-box; 
    }
    #app{
      width: 100%;
    }
    ul,li{
      list-style: none;
      margin: 0;padding: 0;
    }
    .mycontent{
      width: 100%;
      margin-top: 40px;
      overflow: auto;
    }
    .fadeIn-enter{
      opacity: 0;
    }
    .fadeIn-enter-active{
      transition: all .3s linear;
    }
    .fadeIn-leave-active{
      transition: all .3s linear;
      opacity: 0;
    }
</style>
