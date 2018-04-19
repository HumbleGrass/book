<template>
    <div>
        <h1>this is child</h1>
        <h3>{{msg}}</h3>
        <div @click="($event)=>$emit('sjh',$event.target.innerText)">{{test}}</div>
    </div>
</template>
<script>
export default {
    model:{
        prop:'msg',
        event:'sjh'
    },
    props:['msg'],
    data(){
        return {test:'opipjwiefwiefjwef'}
    }
}
</script>
<style lang="less" scoped>

</style>
