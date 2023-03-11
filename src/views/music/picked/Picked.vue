<template>
    <div class="picked">
        <JyCarousel :dataList="handpickPlaylist" @click="handleClick">
            <template #playlistItem="{ data }">
                <img :src="data.picUrl" alt="" class="wh-full" />
            </template>
        </JyCarousel>
    </div>
</template>

<script setup lang="ts">
import { getNewAlbum } from '@/service';

const handpickPlaylist = ref<any[]>([]);

onMounted(async () => {
    const { code, weekData } = await getNewAlbum();
    if (code === 200) {
        handpickPlaylist.value = weekData;
    }
});

const handleClick = (playlistItem: any) => {
    console.log('Rd ~ file: Picked.vue:25 ~ handleClick ~ playlistItem:', playlistItem);
};
</script>

<style lang="scss">
.picked {
    flex: 1;
    width: 100%;
    @include scrollbarStyle;
}
</style>
