<template>
    <div class="footer">
        <router-link :to="{name:'Home'}" active-class="active">
            <i class="iconfont icon-shouye"></i>       
            <span>首页</span>
        </router-link>  
        <router-link :to="{name:'List'}" active-class="active">
            <i class="iconfont icon-chazhaobiaodanliebiao"></i> 
            <span>列表</span>
        </router-link>
        <router-link :to="{name:'Collect'}" active-class="active">
            <i class="iconfont icon-shoucang"></i> 
            <span>收藏</span>
        </router-link>
        <router-link :to="{name:'Add'}" active-class="active">
            <i class="iconfont icon-icon--"></i> 
            <span>添加</span>
        </router-link>
    </div>
</template>
<style lang="less" scoped>
    .footer{
        position: fixed;
        z-index: 100;
        left: 0;
        bottom: 0;
        width:100%;
        height: 50px;
        display: flex;
        border-top: 1px solid;
        background: #999;
        a{
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: center;
            align-items: center;
        }
        a.active{
            color: red;
        }
        a:hover{
            text-decoration: none;
        }        
    }
</style>


