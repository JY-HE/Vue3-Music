import {
    Planet as iconPlanet,
    Music as iconMusic,
    VideoOne as iconVideoOne,
    Fm as iconFm,
    Like as iconLike,
    Computer as iconComputer,
    DownloadThree as iconDownloadThree,
    PlayTwo as iconPlayTwo,
} from '@icon-park/vue-next';
import { useRoute } from 'vue-router';
import { IMenus } from '@/models/menu';

const menus: IMenus[] = [
    {
        name: '在线音乐',
        menus: [
            {
                name: '推荐',
                key: 'discover',
                icon: iconPlanet,
                theme: 'outline',
            },
            {
                name: '音乐馆',
                key: 'music',
                icon: iconMusic,
                theme: 'outline',
            },
            {
                name: '视频',
                key: 'video',
                icon: iconVideoOne,
                theme: 'outline',
            },
            {
                name: '电台',
                key: 'dj',
                icon: iconFm,
                theme: 'outline',
            },
        ],
    },
    {
        name: '我的音乐',
        menus: [
            {
                name: '我喜欢',
                key: 'love',
                icon: iconLike,
                theme: 'outline',
            },
            {
                name: '本地歌曲',
                key: 'local',
                icon: iconComputer,
                theme: 'outline',
            },
            {
                name: '下载歌曲',
                key: 'download',
                icon: iconDownloadThree,
                theme: 'outline',
            },
            {
                name: '最近播放',
                key: 'recently',
                icon: iconPlayTwo,
                theme: 'outline',
            },
        ],
    },
];

export const useMenu = () => {
    const route = useRoute();

    const currentKey = ref(route.meta.menu);

    const setCurrentKey = (menuKey: string) => {
        currentKey.value = menuKey;
    };

    return {
        menus,
        currentKey,
        setCurrentKey,
    };
};
