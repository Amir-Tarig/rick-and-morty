import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "character" */ '../views/Characters.vue'),
  },
  {
    path: '/:originName',
    name: "TheLocations",
    props: true ,
    component: () => import(/* webpackChunkName: "TheLocations" */ '../views/TheLocations.vue')
  },
  {
    path: "/TheOfficialTrailer",
    name: "TheOfficialTrailer",
    component: () => import(/* webpackChunkName: "Trailer" */ '@/components/video.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
