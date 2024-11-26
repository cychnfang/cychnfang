import Layout from '@/layout/index.vue'
import Home from '@/pages/Home/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      }
    ]
  }
]

export default routes
