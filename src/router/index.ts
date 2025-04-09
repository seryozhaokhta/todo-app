import { createRouter, createWebHistory } from 'vue-router';
import AppTodoList from '../components/AppTodoList.vue';

const routes = [
    {
        path: '/',
        redirect: '/all',
    },
    {
        path: '/all',
        name: 'All',
        component: AppTodoList,
        meta: { filter: 'all' },
    },
    {
        path: '/active',
        name: 'Active',
        component: AppTodoList,
        meta: { filter: 'active' },
    },
    {
        path: '/completed',
        name: 'Completed',
        component: AppTodoList,
        meta: { filter: 'completed' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
