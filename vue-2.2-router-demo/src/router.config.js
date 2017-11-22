import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Transition from '../components/transition.vue'

export default {
	routes:[
		{path:'/home',component:Home},
        {path:'/news',component:News},
		{path:'/transition',component:Transition},

		{path:'/',component:Home},
	]
}