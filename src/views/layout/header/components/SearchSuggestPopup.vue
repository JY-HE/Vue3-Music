<template>
    <div class="search_suggest_popup w-120 h-90 bg-[rgba(var(--theme-base),0.5)]">
        <div class="flex-1 hot_box">
            <div class="hot_title">热门搜索</div>
        </div>
        <div class="flex-1">
            <div class="history_title">搜索历史</div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.search_suggest_popup {
    border-radius: 8px;
    display: flex;
    font-size: 14px;
    padding: 16px 8px;
    color: rgba(var(--theme-text-color),1);

    .hot_box {
        border-right: 1px solid #ccc;
    }

    .hot_title,
    .history_title {
        border-bottom: 1px solid #ccc;
        height: 36px;
        display: flex;
        align-items: center;
        padding-left: 8px;
    }
}
</style>
