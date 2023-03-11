div<template>
    <div class="wh-full flex-between-center px-4 head_box">
        <div class="flex items-center h-9">
            <AdvanceOrRetreat />
            <div ref="searchRef">
                <Search
                    class="ml-6"
                    @handleSearchSuggestPopup="(val: boolean) => (isShowSearchPopup = val)"
                />
            </div>
            <div ref="searchSuggestPopupRef">
                <SearchSuggestPopup
                    @handleSearchSuggestPopup="(val: boolean) => (isShowSearchPopup = val)"
                    v-if="isShowSearchPopup"
                />
            </div>
        </div>
        <div class="flex items-center h-9">
            <Operation />
        </div>
    </div>
</template>

<script setup lang="ts">
import AdvanceOrRetreat from './components/AdvanceOrRetreat.vue';
import Search from './components/Search.vue';
import SearchSuggestPopup from './components/SearchSuggestPopup.vue';
import Operation from './components/Operation.vue';

const isShowSearchPopup = ref<boolean>(false);
const searchRef = ref<HTMLElement | null>(null);
const searchSuggestPopupRef = ref<HTMLElement | null>(null);

onMounted(async () => {
    document.addEventListener('click', handlePopupShow);
});
onUnmounted(() => {
    document.removeEventListener('click', handlePopupShow);
});

/**
 * @description: 控制点击其他地方时隐藏搜索建议框
 * @param {MouseEvent} event
 */
const handlePopupShow = (event: MouseEvent) => {
    if (searchRef.value && searchSuggestPopupRef.value) {
        isShowSearchPopup.value =
            searchRef.value.contains(event.target) ||
            searchSuggestPopupRef.value.contains(event.target);
    }
};
</script>

