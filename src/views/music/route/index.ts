const route = {
    path: 'music',
    name: 'music',
    component: () => import('@/views/music/Index.vue'),
    redirect: { name: 'picked' },
    meta: {
        menu: 'music'
    },
    children: [
        {
            path: 'picked',
            name: 'picked',
            component: () => import("@/views/music/picked/Picked.vue"),
            meta: {
                menu: 'music',
                title: '精选',
                keepAlive: true,
            }
        },
        {
            path: 'toplist',
            name: 'toplist',
            component: () => import("@/views/music/toplist/TopList.vue"),
            meta: {
                menu: 'music',
                title: '排行',
                keepAlive: true,
            }
        },
        {
            path: 'artist',
            name: 'artist',
            component: () => import('@/views/music/artist/Artist.vue'),
            meta: {
                menu: 'music',
                title: '歌手',
                keepAlive: true,
            }
        },
        {
            path: 'category',
            name: 'category',
            component: () => import('@/views/music/category/Category.vue'),
            meta: {
                menu: 'music',
                title: '分类歌单',
                keepAlive: true,
            }
        }
    ]
}

export default route;

