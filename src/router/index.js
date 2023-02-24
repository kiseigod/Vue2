import VueRouter from 'vue-router'

// 导入需要组件
import Login from '../components/Login'
import Home from '../components/Home'


const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login',component:Login},
        {
            path: '/home',
            component: Home,
        }
    ]
})

export default router