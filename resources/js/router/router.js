import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import Signup from '../components/login/Signup'
import Fourm from '../components/fourm/Fourm'
const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/fourm', component: Fourm , nme:'fourm'},

  ]

  const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang:false,
    mode:'history'
  });

  export default router
