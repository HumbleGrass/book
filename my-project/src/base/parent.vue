<template>
    <div>
        <h1>this is parent</h1>
        <h3>{{msg}}</h3>
        <child v-model="msg"></child>
    </div>
</template>
<script>
export default {
    data(){
        return {msg:"wehfwifwijfowjeoif"}
    },
    components:{child:()=>import('./child')}
}
</script>
<style lang="less" scoped>

</style>
