import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from "@/firebase/config"


// AUTH GUARD
const authGuard = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Welcome'})
  } else {
    next()
  }
}

const noAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    next({ name: 'Chatroom'})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue'),
    beforeEnter: noAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: () => import('../views/Chatroom.vue'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
