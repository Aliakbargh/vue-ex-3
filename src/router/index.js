import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '@/views/AboutView.vue'
// import JobsView from '../views/Jobs/JobsView.vue'
// import JobsDitales from '@/views/Jobs/JobsDitales.vue'
import NotFound from '@/views/NotFound.vue' 



const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView//or
    component: ()=>import (/*webpackChunkName="home"*/"../views/HomeView.vue")
  },
  {
    path: '/about',
    name: 'about',
    // component: AboutView//or
    component: ()=>import (/*webpackChunkName="about"*/"@/views/AboutView.vue")

  },
  {
    path: '/jobs',
    name: 'jobs',
    // component: JobsView,//or
    component: ()=>import (/*webpackChunkName="jobs"*/"../views/Jobs/JobsView.vue")

  },
  {
    path: '/jobs/:id',
    name: 'jobsDitales',
    // component: JobsDitales,//or
    component: ()=>import (/*webpackChunkName="jobsDetails"*/"@/views/Jobs/JobsDitales.vue"),
    props: true,
  },
  //redirect to the jobs page
  {
    path: '/all-jab',
    redirect: '/jobs',
  },
  //NotFound error
  {
    path:'/:catchAll(.*)',
    name: 'NotFound',
    component : NotFound 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
