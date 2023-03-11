<template>
    <div class="flex search_box">
        <JyIconfont icon="&#xe8b9;" />
        <el-input
            v-model.trim="keyword"
            placeholder="搜索音乐"
            @focus="emits('handleSearchSuggestPopup', true)"
            @change="handleSearch"
        />
    </div>
</template>

<script setup lang="ts">
import { getKeywordSearch } from '@/service';
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';

const { setSearchHistoryList } = useSearchStore();
const { keyword } = storeToRefs(useSearchStore());
const emits = defineEmits(['handleSearchSuggestPopup']);

/**
 * @description: 处理搜索关键词
 * @param {string} keyword
 */
const handleSearch = async (keyword: string) => {
    setSearchHistoryList(keyword);
    const { code, result } = await getKeywordSearch(keyword);
    if (code === 200) {
        console.log('Rd ~ file: SearchSuggestPopup.vue:54 ~ searchSong ~ result:', result);
    }
};
</script>

<style lang="scss">
.search_box {
    position: relative;

    .JyIconfont {
        position: absolute;
        z-index: 10;
        top: 50%;
        transform: translateY(-50%);
        left: 14px;
    }
}

.el-input {
    width: 300px;

    .el-input__wrapper {
        border: none;
        box-shadow: none;
        border-radius: 8px;
        background-color: #e4e1e1;
        padding: 0;

        .el-input__inner {
            @include blackColor(1, color);
            padding-left: 40px;
        }

        .el-input__inner:focus {
            border: none;
            box-shadow: none;
        }
    }
}
</style>
