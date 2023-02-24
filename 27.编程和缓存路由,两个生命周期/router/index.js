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
                            name:'detail',
                            // path: 'detail/:id/:title',
                            path: 'detail',
                            component: Detail,

                            // props的第一种写法.值为对象
                            // props:{a:1,b:'hello'}

                            // props的第二种写法.值为布尔值 (只接收params参数)
                            // props: true
                            
                            // props的第三种写法.值为函数 
                            props({query}) {
                                return {id:query.id,title:query.title}
                            }
                        }
                    ]
                }
            ]
        },
    ]
})

