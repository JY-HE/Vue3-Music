<template>
    <div class="wh-full menu_list">
        <el-scrollbar>
            <el-row class="jy-el-row">
                <el-col :span="24">
                    <el-menu default-active="0-0" :default-openeds="['3']">
                        <el-menu-item-group
                            :title="menu.name"
                            v-for="(menu, index) in menus"
                            :key="menu.name"
                        >
                            <el-menu-item
                                :index="`${index}-${ind}`"
                                v-for="(item, ind) in menu.menus"
                                :key="item.name"
                                @click="changeMenu(item)"
                            >
                                <JyIconfont :icon="item.icon" />
                                <span> {{ item.name }}</span>
                            </el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="3">
                            <template #title>创建的歌单</template>
                            <el-menu-item
                                :index="`3-${ind}`"
                                v-for="(item, ind) in state.userPlaylist"
                                :key="item.id"
                                @click="changePlaylist(item.id)"
                            >
                                <span> {{ item.name }}</span>
                            </el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="4">
                            <template #title>收藏的歌单</template>
                            <el-menu-item
                                :index="`4-${ind}`"
                                v-for="(item, ind) in state.userPlaylist"
                                :key="item.id"
                                @click="changePlaylist(item.id)"
                            >
                                <span> {{ item.name }}</span>
                            </el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-col>
            </el-row>
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
 * @description: 处理在线音乐和我的音乐切换
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
    console.log(
        'Rd ~ file: MenuList.vue:147 ~ handleUserPlayList ~ profile.value.userId:',
        profile.value.userId
    );
    if (profile.value.userId) {
        const { code, playlist } = await getUserPlaylist(profile.value.userId);
        console.log('Rd ~ file: MenuList.vue:163 ~ handleUserPlayList ~ code:', code);
        if (code === 200) {
            state.userPlaylist = playlist;
        }
    }
};

/**
 * @description: 处理创建的歌单切换
 * @param {IMenu} menu
 */
const changePlaylist = async (id: string) => {
    state.playlistId = id;
    await router.push({ path: '/playlist', replace: true, query: { id: id } });
};
</script>

<style lang="scss">
.menu_list {
    .el-scrollbar {
        @include scrollbarStyle;
        width: 100%;
        height: 100%;
        padding: 16px;
    }

    .jy-el-row {
        .el-menu {
            border: none;
            background-color: transparent;
            .el-menu-item-group {
                .el-menu-item-group__title {
                    padding: 0;
                    @include fontStyle(5);
                    @include fontColor(1);
                }
            }
            .el-sub-menu {
                .el-sub-menu__title {
                    height: 22px;
                    padding: 0;
                    @include fontStyle(5);
                    @include fontColor(1);
                    &:hover {
                        background: transparent;
                    }
                }
                .el-menu,.el-menu--inline {
                    height: 266px;
                    @include scrollbarStyle;
                    .el-menu-item {
                        padding: 0 0 0 6px;
                    }
                }
            }
            .el-menu-item {
                display: flex;
                align-items: center;
                border-radius: 4px;
                height: 48px;
                margin: 4px 0;
                &:hover {
                    @include normalColor(0.1, background);
                }
                &.is-active {
                    @include normalColor(1, background);
                    span,
                    .JyIconfont {
                        @include textActiveColor(1, color);
                    }
                }
                .JyIconfont {
                    @include iconSize(2);
                    @include fontColor(2);
                    line-height: 24px;
                }
                span {
                    width: 100%;
                    margin-left: 10px;
                    @include fontStyle(4);
                    @include fontColor(2);
                    @include textHidden;
                }
            }
        }
    }
}
</style>
