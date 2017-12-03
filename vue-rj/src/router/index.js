import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/components/Home.vue'
import FollowView from '@/components/Follow.vue'
import ColumnView from '@/components/Column.vue'
import UserInfo from '@/components/UserInfo.vue'
import Article from '@/components/Article.vue'


Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {path:'/home',component:HomeView},
        {path:'/follow',component:FollowView},
        {path:'/column',component:ColumnView},
        {path:'/user-info',component:UserInfo},
        {path:'/article',component:Article},
        {path:'/',redirect:'/home'}
    ]
})
