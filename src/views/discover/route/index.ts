const route = {
    path: 'discover',
    name: 'discover',
    component: () => import('@/views/discover/Index.vue'),
    meta: {
        menu: 'discover',
        keepAlive: true,
    },
    children: []
};

export default route;