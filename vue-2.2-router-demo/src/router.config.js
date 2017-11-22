import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Transition from '../components/transition.vue'

export default {
    mode:'history',
    base:__dirname,
	routes:[
		{path:'/home',component:Home},
        {path:'/news',component:News},
		{path:'/transition',component:Transition,
            beforeEnter:(to,from,next)=>{
                console.log(to)
                console.log(from)
                // next()  表示可以访问
                // next(false) 或者是不写next() 表示不能访问
                next()
            }
        },

		{path:'/',component:Home},
	]
}