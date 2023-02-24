<template>
    <div>
        <button @click="sub">-</button>
        <span>{{num}}</span>
        <button @click="add">+</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    props: ['num', 'id'],
    methods: {
        add() {
            const obj = {id:this.id,value:this.num+1}
            this.$bus.$emit('share',obj)
        },
        sub() {
            if (this.num - 1 === 0) return
            const obj = { id: this.id, value: this.num-1 }
            this.$bus.$emit('share',obj)
        }
    }
}
</script>

<style scoped>
button{
    border: none;
    font-size: 18px;
}
span{
    margin: 0 7px;
}
</style>