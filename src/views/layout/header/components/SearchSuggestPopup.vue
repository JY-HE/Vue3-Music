<template>
    <div class="search_suggest_popup w-120 h-90">
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
    background-color: #fefeff;
    display: flex;
    padding: 16px 8px;
    font-size: 14px;

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
