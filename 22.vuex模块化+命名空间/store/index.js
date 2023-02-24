// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
 
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        countAbout:countOptions,
        personAbout:personOptions
    }
})

