import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('./pages/HomePage.vue')
const CredentialsPage = () => import('./pages/CredentialsPage.vue')
const InfrastructurePage = () => import('./pages/InfrastructurePage.vue')
const DigitalLabPage = () => import('./pages/DigitalLabPage.vue')
const BlogDetailPage = () => import('./pages/BlogDetailPage.vue')

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/credentials', name: 'credentials', component: CredentialsPage },
  { path: '/it-infrastructure', name: 'infrastructure', component: InfrastructurePage },
  { path: '/lab', name: 'lab', component: DigitalLabPage },
  { path: '/blog/:slug', name: 'blog-detail', component: BlogDetailPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
