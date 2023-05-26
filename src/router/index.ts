import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../pages/PageHome.vue'
import PageRegistration from '../pages/PageRegistration.vue'
import PageAuth from '../pages/PageAuth.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageHome,
        },
        {
            path: '/register',
            name: 'register',
            component: PageRegistration,
        },
        {
            path: '/login',
            name: 'login',
            component: PageAuth,
        },
    ],
})

export default router
