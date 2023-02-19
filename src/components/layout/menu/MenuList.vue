<template>
    <el-scrollbar>
        <div v-for="menu in menus" :key="menu.name" class="mb-6">
            <div class="h-9 flex items-center">{{ menu.name }}</div>
            <div
                v-for="(item, index) in menu.menus"
                :key="item.name"
                class="h-9 text-[1.125rem] flex items-center pl-4 menu"
                :class="item.key === state.currentKey ? 'active' : ''"
                @click="changeMenu(item)"
            >
                <IconPark :icon="item.icon" size="20" :theme="item.theme" />
                <span class="ml-4">{{ item.name }}</span>
            </div>
        </div>
    </el-scrollbar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { IMenus, IMenu } from '@/models/menu';
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

const router = useRouter();

const state = reactive({
    currentKey: (router.currentRoute?.value?.meta?.menu as string) || '',
});

const menus = computed<IMenus[]>(() => {
    return [
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
});

watch(
    () => router.currentRoute.value.meta,
    newValue => {
        console.log('Rd ~ file: MenuList.vue:41 ~ newValue', newValue);
        state.currentKey = newValue.menu as string;
    },
    { immediate: true }
);

const changeMenu = async (menu: IMenu) => {
    console.log('Rd ~ file: MenuList.vue:38 ~ changeMenu ~ menu', menu);
    state.currentKey = menu.key;
    await router.push({ name: menu.key || '/', replace: true, params: {} });
};
</script>

<style lang="scss">
.menu {
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background-image: linear-gradient(to right, rgb(222, 222, 222), rgb(236, 234, 234));
    }
    &.active {
        background-image: linear-gradient(to right, rgb(31, 212, 174), rgb(30, 205, 151));
        color: #fff;
    }
}
</style>
