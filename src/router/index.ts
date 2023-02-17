import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Routes from './routes';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Root.vue'),
        // redirect: '/discover',
        redirect: { name: 'discover' },
        children: [
            ...Routes
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;