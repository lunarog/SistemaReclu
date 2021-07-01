import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Sitio>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Mi empresa>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
  {
    path: '/New',
    name: 'new',
    meta:{
        breadcrum:[
            {name:'Solicitar nueva posición',icon:'mdi mdi-table-edit'}
        ]
    },
    component: () => import('../views/New.vue'),
  },
  {
    path: '/View',
    name: 'view',
    component: () => import('../views/View.vue'),
  },
  {
    path: '/Edit',
    name: 'edit',
    meta:{
        breadcrum:[
            {name:'Editar nueva posición',icon:'mdi mdi-table-edit'}
        ]
    },
    component: () => import('../views/Edit.vue'),
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
