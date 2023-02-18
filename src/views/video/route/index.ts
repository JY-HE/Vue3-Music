const route = {
    path: 'video',
    name: 'video',
    component: () => import('@/views/video/Index.vue'),
    meta: {
        menu: 'video',
        title: '视频',
        keepAlive: true,
    },
    children: []
};

export default route;