<template>
    <div class="w-full h-full p-4">
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
                <JyIconfont :icon='item.icon'></JyIconfont>
                <span class="ml-4">{{ item.name }}</span>
            </div>
        </div>
    </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { IMenus, IMenu } from '@/models/menu';

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
                    icon: '&#xe65c;',
                    theme: 'outline',
                },
                {
                    name: '音乐馆',
                    key: 'music',
                    icon: '&#xe89e;',
                    theme: 'outline',
                },
                {
                    name: '视频',
                    key: 'video',
                    icon: '&#xe8f1;',
                    theme: 'outline',
                },
                {
                    name: '电台',
                    key: 'dj',
                    icon: '&#xe8f2;',
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
                    icon: '&#xe870;',
                    theme: 'outline',
                },
                {
                    name: '本地歌曲',
                    key: 'local',
                    icon: '&#xe601;',
                    theme: 'outline',
                },
                {
                    name: '下载歌曲',
                    key: 'download',
                    icon: '&#xe617;',
                    theme: 'outline',
                },
                {
                    name: '最近播放',
                    key: 'recently',
                    icon: '&#xe62b;',
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
    .JyIconfont{
        font-size: 24px;
    }
}
</style>
