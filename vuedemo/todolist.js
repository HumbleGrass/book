/**
 * Created by Administrator on 2018/3/30.
 */
let vm = new Vue({
    el: "#app",
    data: {
        title:'',
        cur:'',
        hash:'',
        todos: [
            {isSelect:false,title:'睡觉'},
            {isSelect:false,title:'吃饭'}
        ]
    },
    created(){
        //初始化数据有数据用localStorage没有数据用默认的
        this.todos=JSON.parse(localStorage.getItem('data'))||this.todos;
        //监控hash值只变化
            this.hash=window.location.hash.slice(2) || 'all'
        window.addEventListener('hashchange',()=>{
            this.hash=window.location.hash.slice(2);
            console.log(this.hash);
        },false)
    },
    watch:{
        todos:{
            //深度观察，只要todos改变就存在本地
            handler(){
                localStorage.setItem('data',JSON.stringify(this.todos))
            },deep:true
        }
    },
    directives:{
        focus(el,bings){
            if(bings.value){
                el.focus();
            }
        }
    },
    computed:{
        count(){
            return this.todos.filter(item=>!item.isSelect).length
        },
        newtodos(){
            if(this.hash==='all') return this.todos;
            if(this.hash=='finish') return this.todos.filter(item=>item.isSelect);
            if(this.hash==='unfinish') return this.todos.filter(item=>!item.isSelect);

        }
    },
    methods:{
        add(){
            this.todos.push({isSelect:false,title:this.title});
            this.title='';
        },
        del(val){
            this.todos=this.todos.filter((item,index)=>item!==val)
        },
        rember(item){
            this.cur=item
        },
        cancl(){
            this.cur=''
        }
    }
})
