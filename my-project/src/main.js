// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
// 导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 使用轮播图插件
Vue.use(VueAwesomeSwiper, /* { default global options } */)
// 使用vue-loazyload 插件
Vue.use(VueLazyload,{
    preLoad:1.3,
    error:'./assets/img/error.jpg',
    loading:'./assets/img/timg.gif',
    attempt:1
})

/* eslint-disable no-new */
Vue.filter('my-price',(val)=>{
  return '￥'+val.toFixed(2);  
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
