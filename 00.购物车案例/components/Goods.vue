<template>
    <div>
       <input type="checkbox" :checked="state" @change="stateChange" :id="'cd'+id">
       <label :for="'cd'+id"><img :src="pic" alt=""></label>
       <span class="content">{{title}}</span>
       <span class="price">￥{{price}}</span>
       <Counter class="counter" :num="count" :id="id"/>
    </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
    name: 'Goods',
    props: ['title', 'pic', 'price', 'state', 'id','count'],
    components:{Counter},
    methods: {
        stateChange(e) {
            const newState = e.target.checked
            this.$emit('state-change',{id:this.id,value:newState})
        }
    }
}
</script>

<style scoped>
div{
    position: relative;
    height: 130px;
    margin: 3px 0;
    border-bottom: 1px solid #ccc;
}
input{
    position: absolute;
    top: 50px;
}
img{
    margin-left: 25px;
}
.content{
    position: absolute;
    top: 0;
    left: 160px;
    font-size: 13px;
}
.price{
    color: red;
    position: absolute;
    bottom: 5px;
    left: 160px;
}
.counter{
    position: absolute;
    top: 98px;
    right: 0;
}
</style>