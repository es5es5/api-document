import Vue from "vue"
import Router from "vue-router"
import ApiLayout from './templates/api/ApiLayout'

import ApiListRoutes from '@/templates/api/project1/controller1/routes'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "ApiLayout",
      redirect: '/api-list',
      component: ApiLayout,
      children: [
        ...ApiListRoutes
      ]
    }
  ]
})
