const route = {
    path: 'album',
    name: 'album',
    component: () => import('@/views/album/Index.vue'),
    children: []
};

export default route;