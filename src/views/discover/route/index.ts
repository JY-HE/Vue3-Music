const route = {
    path: '/discover',
    name: '发现页',
    component: () => import('@/views/discover/Discover.vue'),
    children: []
};

export default route;