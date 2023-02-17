const route = {
    path: '/discover',
    name: 'discover',
    component: () => import('@/views/discover/Discover.vue'),
    meta: {
        menu: 'discover',
        keepAlive: true,
    },
    children: []
};

export default route;