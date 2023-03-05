<template>
    <div class="search_suggest_popup w-120 h-90">
        <div class="hot_box">
            <div class="hot_title">热门搜索</div>
            <div class="flex-1" v-loading="!state.hotSearchList.length">
                <div
                    v-for="(song, index) in state.hotSearchList"
                    :key="index"
                    class="song_item w-full h-7 px-4"
                    @click="searchSong(song.searchWord)"
                >
                    <span>{{ song.searchWord }}</span>
                    <span>{{ getNumberFormat(song.score) }}</span>
                </div>
            </div>
        </div>
        <div class="flex-1">
            <div class="history_title">
                <span>搜索历史</span>
                <span class="cursor-pointer mr-2" @click.stop="clearSearchHistoryList">清空</span>
            </div>
            <div
                v-for="(keyword, index) in searchHistoryList"
                :key="index"
                class="song_item w-full h-7 px-4"
                @click="searchSong(keyword)"
            >
                <span>{{ keyword }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getHotSearch, getKeywordSearch } from '@/service';
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';
import { getNumberFormat } from '@/utils';
import type { IHotSearchList } from '@/models/search';

const { clearSearchHistoryList, getSearchHistoryList, setKeyword } = useSearchStore();
const { searchHistoryList } = storeToRefs(useSearchStore());
const state = reactive({
    hotSearchList: [] as IHotSearchList[],
});

onMounted(async () => {
    getSearchHistoryList();
    const { code, data } = await getHotSearch();
    if (code === 200) {
        state.hotSearchList = data;
    }
    console.log('Rd ~ file: SearchSuggestPopup.vue:17 ~ onMounted ~ data:', data);
});

/**
 * @description: 处理点击热门搜索项和历史搜索项
 * @param {IHotSearchList} song
 */
const searchSong = async (searchWord: string) => {
    setKeyword(searchWord);
    const { code, result } = await getKeywordSearch(searchWord);
    if (code === 200) {
        console.log('Rd ~ file: SearchSuggestPopup.vue:54 ~ searchSong ~ result:', result);
    }
};
</script>

<style lang="scss">
.search_suggest_popup {
    border-radius: 8px;
    display: flex;
    padding: 16px 8px;
    @include fontColor(3);
    @include fontStyle(6);
    @include themeColor(0.5, background);

    .hot_box {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        width: 50%;

        & > div {
            @include scrollbarStyle;
        }
    }

    .hot_title,
    .history_title {
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 8px;
    }

    .song_item {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover {
            @include menuHoverBackground(1, background);
        }
    }
}
</style>
