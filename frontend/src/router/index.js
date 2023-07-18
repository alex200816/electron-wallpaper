import Vue from 'vue'
import Router from 'vue-router'

const RouteView = {
    name: 'RouteView', render: h => h('router-view')
}
export const constantRouterMap = [{
    path: '/', component: () => import('@/layouts/AppSider'), children: [{
        path: '/wallpaper', name: 'Wallpaper', component: RouteView, redirect: {name: 'HomeIndex'}, children: [{
            path: '/home', name: 'HomeIndex', component: () => import('@/views/Index')
        }, {
            path: '/wallpaper/index', name: 'WallPaperIndex', component: () => import('@/views/wallpaperPage')
        },]
    }]
}]

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    mode: 'hash', routes: constantRouterMap
})
