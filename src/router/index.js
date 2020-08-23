import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../views/Home/Home');
const Category=()=>import('../views/Category/Category');
const Shopcact=()=>import('../views/Shopcact/Shopcact');
const profile=()=>import('../views/profile/profile');
const detail=()=>import('../views/detail/deTail');

Vue.use(VueRouter)

const router=new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'Home',
            meta:{
                title:'首页'
            }
        },
        {
            path: '/Home',
            component:Home,
            meta:{
                title:'首页'
            }
        },
        {
            path: '/Category',
            component:Category,
            meta:{
                title:'分类'
            }
        },
        {
            path:'/Shopcact',
            component:Shopcact,
            meta:{
                title:'购物车'

            }
        },
        {
            path: '/profile',
            component:profile,
            meta:{
                title:'我的'
            }
        },
        {
            path: '/detail/:iid',
            component:detail,
            meta:{
                title:'详情页'
            }
        },
    ],
    mode:'history',
    linkActiveClass:'active'
})
// 前置守卫
router.beforeEach((to,from,next)=>{
    //从from跳转到to
    document.title=to.matched[0].meta.title
   // console.log(to)
    next()
})
router.afterEach((to, from) => {
    // console.log('----');
})
export default router