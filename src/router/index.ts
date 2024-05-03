import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('../views/chatPage.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/notificationPage.vue')
      },
      {
        path: 'tab5',
        component: () => import('@/views/historyPage.vue')
      },
      {
        path: 'tab6',
        component: () => import('@/views/shoppingCartPage.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('../views/loginPage.vue')
  },
  {
    path: '/login/verify',
    component: () => import('../views/verifyAccount.vue')
  },
  {
    path: '/payment',
    component: () => import('../views/paymentPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
