const route = {
    path: 'playlist',
    name: 'playlist',
    component: () => import('@/views/playList/Index.vue'),
    children: []
};

export default route;