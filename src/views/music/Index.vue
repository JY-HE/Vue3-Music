<template>
    <div class="wh-full music_content">
        <JyTitle title="音乐馆" :showMoreButton="false" />
        <JyNav :navList="navList" @click="handleClick" />
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navList = computed(() => {
    return [
        { name: '精选', path: '/music/picked' },
        { name: '排行', path: '/music/toplist' },
        { name: '歌手', path: '/music/artist' },
        { name: '分类歌单', path: '/music/category' },
    ];
});

const handleClick = (navItem: { name: string; path: string }) => {
    router.push({ path: navItem.path, replace: true, query: {} });
};
</script>

<style lang="scss">
.music_content{
    @include scrollbarStyle;
}
</style>
