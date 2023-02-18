<template>
    <div class="wh-full flex-between-center px-4 head_box">
        <div class="flex items-center h-9">
            <AdvanceOrRetreat></AdvanceOrRetreat>
            <Search
                class="ml-6"
                @handleSearchSuggestPopup="(val: boolean) => (isShowSearchPopup = val)"
            ></Search>
            <SearchSuggestPopup
                class="left-21 top-[100%]"
                v-if="isShowSearchPopup"
            ></SearchSuggestPopup>
        </div>
        <div class="flex items-center h-9">
            <Operation></Operation>
        </div>
    </div>
</template>

<script setup lang="ts">
const isShowSearchPopup = ref<boolean>(false);
</script>

<style lang="scss">
.head_box {
    position: relative;

    .search_suggest_popup {
        position: absolute;
        z-index: 10;
    }
}
</style>
