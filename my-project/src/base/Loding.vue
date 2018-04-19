<template>
  <div id="loding">
      <div class="loading"></div>
  </div>
</template>
<style lang="less" scoped>
    #loding{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background:rgba(0, 0, 0, 0.3);
        text-align: center;
    }
    .loading{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 30px;
            height: 30px;
            margin: auto;
            border-radius: 50%;
            border: 5px solid #BEBEBE;
            border-left: 5px solid #498aca;
            animation: load 1s linear infinite;
            -moz-animation:load 1s linear infinite;
            -webkit-animation: load 1s linear infinite;
            -o-animation:load 1s linear infinite;
        }
        @-webkit-keyframes load
        {
            from{-webkit-transform:rotate(0deg);}
            to{-webkit-transform:rotate(360deg);}
        }
        @-moz-keyframes load
        {
            from{-moz-transform:rotate(0deg);}
            to{-moz-transform:rotate(360deg);}
        }
        @-o-keyframes load
        {
            from{-o-transform:rotate(0deg);}
            to{-o-transform:rotate(360deg);}
        }
</style>

