import MainPage from "@/pages/MainPage";
import CardPage from "@/pages/CardPage";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/card/:id',
    component: CardPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
