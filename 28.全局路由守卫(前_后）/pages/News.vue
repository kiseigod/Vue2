<template>
    <div>
         <ul>
            <li :style="{opacity}">学习Vue</li>
            <li>news001 <input type="text"></li>
            <li>news002 <input type="text"></li>
            <li>news003 <input type="text"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            opacity:1
        }
    },
    // mounted() {
    //     this.timer = setInterval(() => {
    //         this.opacity -= 0.01
    //         if(this.opacity <= 0) this.opacity = 1
    //     },20)
    // },
    // beforeDestroy() {
    //     clearInterval(this.timer)
    // }

    // 两个新的生命周期 
    activated() {
        this.timer = setInterval(() => {
            this.opacity -= 0.01
            if(this.opacity <= 0) this.opacity = 1
        },20)
    },
    deactivated() {
        clearInterval(this.timer)
    }
}
</script>