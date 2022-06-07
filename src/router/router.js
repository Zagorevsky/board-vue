import MainPage from "@/pages/MainPage";
import CardPage from "@/pages/CardPage";
import { createRouter, createWebHistory } from "vue-router";
import RegisterUser from '@/components/RegisterUser';
import LoginUser from '@/components/LoginUser';

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/card/:id',
    component: CardPage
  },
  {
    path: '/register',
    name: 'register-user',
    component: RegisterUser,
    meta: {
      guest: true
    }
  },
  {
    path: '/login',
    name: 'login-user',
    component: LoginUser,
    meta: {
      guest: true
    }
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
