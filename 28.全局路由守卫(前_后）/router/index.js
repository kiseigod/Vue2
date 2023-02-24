import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


// 创建一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
            meta:{title:'关于'}
        },
        {
            path: '/home',
            component: Home,
            meta:{isAuth:true,title:'主页'},
            children: [
                {
                    path: 'news',
                    component: News,
                    meta:{title:'新闻'}
                },
                {
                    path: 'message',
                    component: Message,
                    meta:{isAuth:true,title:'信息'},
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

// 全局前置路由守卫————初始化和每次切换路由之前被调用
router.beforeEach((to, from, next) => {
    // if (to.path === '/home' || to.path === '/home/message') {
    //     next()
    // }

    if (to.meta.isAuth) {
        next()
    }
})

// 全局后置路由守卫————初始化和每次切换路由之后被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || '系统'
})

export default router

