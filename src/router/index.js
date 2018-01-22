import Vue from 'vue'
import Router from 'vue-router'
import Passwords from '../components/Passwords'
import Authentication from '../components/Authentication'
import Encryption from '../components/Encryption'
import Settings from '../components/Settings'
import Profile from '../components/Profile'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/passwords'
    },
    {
      path: '/passwords',
      name: 'Passwords',
      component: Passwords
    },
    {
      path: '/authentication',
      name: 'Authentication',
      component: Authentication
    },
    {
      path: '/encryption',
      name: 'Encryption',
      component: Encryption
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
