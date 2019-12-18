import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import Signup from '../components/login/Signup'
import Fourm from '../components/fourm/Fourm'
import Create from '../components/fourm/Create'
import Read from '../components/fourm/Read'
const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/fourm', component: Fourm , name:'fourm'},
    { path: '/ask', component: Create},
    { path: '/question/:slug', component: Read , name:'read'},

  ]

  const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang:false,
    mode:'history'
  });

  export default router
