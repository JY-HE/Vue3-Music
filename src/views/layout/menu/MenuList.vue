<template>
    <div class="w-full h-full p-4 menu_list">
        <el-scrollbar>
            <div v-for="menu in menus" :key="menu.name" class="menu_box">
                <div class="h-9 first_menu">{{ menu.name }}</div>
                <div class="sec_menu">
                    <div
                        v-for="item in menu.menus"
                        :key="item.name"
                        class="h-9 pl-4 menu_item"
                        :class="item.key === state.currentKey ? 'active' : ''"
                        @click="changeMenu(item)"
                    >
                        <JyIconfont :icon="item.icon" />
                        <span class="ml-4">{{ item.name }}</span>
                    </div>
                </div>
            </div>
            <div class="menu_box">
                <div class="h-9 first_menu">创建的歌单</div>
                <div class="h-47 sec_menu">
                    <div
                        v-for="item in state.userPlaylist"
                        :key="item.id"
                        class="h-9 pl-4 menu_item"
                        :class="item.id === state.playlistId ? 'active' : ''"
                        @click="changePlaylist(item.id)"
                    >
                        <span class="pr-2">{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { IMenus, IMenu } from '@/models/menu';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { getUserPlaylist } from '@/service';

const router = useRouter();
const { profile } = storeToRefs(useUserStore());

const state = reactive({
    currentKey: (router.currentRoute?.value?.meta?.menu as string) || '',
    playlistId: '',
    userPlaylist: [] as any[],
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

onMounted(() => {
    handleUserPlayList();
});

watch(
    () => router.currentRoute.value.meta,
    newValue => {
        state.currentKey = newValue.menu as string;
    },
    { immediate: true }
);

/**
 * @description: 切换左侧菜单栏
 * @param {IMenu} menu
 */
const changeMenu = async (menu: IMenu) => {
    console.log('Rd ~ file: MenuList.vue:38 ~ changeMenu ~ menu', menu);
    state.currentKey = menu.key;
    await router.push({ name: menu.key || '/', replace: true, params: {} });
};

/**
 * @description: 获取处理用户歌单
 * @return {*}
 */
const handleUserPlayList = async () => {
    if (profile.value.userId) {
        const { code, playlist } = await getUserPlaylist(profile.value.userId);
        if (code === 200) {
            state.userPlaylist = playlist;
        }
    }
};

/**
 * @description: 切换左侧菜单栏
 * @param {IMenu} menu
 */
const changePlaylist = async (id: string) => {
    state.playlistId = id;
    await router.push({ path: '/playlist', replace: true, query: { id: id } });
};
</script>

<style lang="scss">
.menu_list {
    .menu_box {
        margin-bottom: 16px;
        .first_menu {
            display: flex;
            align-items: center;
            @include fontStyle(5);
            @include fontColor(1);
        }

        .sec_menu {
            @include scrollbarStyle;

            .menu_item {
                display: flex;
                align-items: center;
                cursor: pointer;
                border-radius: 4px;

                .JyIconfont {
                    @include iconSize(2);
                    @include fontColor(2);
                }

                &:hover {
                    @include menuHoverBackground(1, background);
                }

                &.active {
                    @include normalColor(1, background);
                    span,
                    .JyIconfont {
                        @include textActiveColor(1, color);
                    }
                }

                span {
                    width: 100%;
                    @include fontStyle(4);
                    @include fontColor(2);
                    @include textHidden;
                }
            }
        }
    }
}
</style>
