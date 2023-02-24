import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


// 创建一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component:About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component:News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        { 
                            name: 'detail',
                            // params参数需要占位符
                            path: 'detail/:id/:title',
                            component:Detail
                        }
                    ]
                }
            ]
        },
    ]
})

