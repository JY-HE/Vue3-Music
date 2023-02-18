const route = {
    path: 'dj',
    name: 'dj',
    component: () => import('@/views/dj/Index.vue'),
    meta: {
        menu: 'dj',
        title: '电台',
        keepAlive: true,
    },
    children: []
};

export default route;