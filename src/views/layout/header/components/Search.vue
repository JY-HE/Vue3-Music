<template>
    <div class="flex search_box">
        <iconSearch theme="outline" size="16" fill="#333" />
        <el-input
            v-model="search"
            placeholder="搜索音乐"
            @focus="emits('handleSearchSuggestPopup', true)"
            @blur="emits('handleSearchSuggestPopup', false)"
        ></el-input>
    </div>
</template>

<script setup lang="ts">
import { Search as iconSearch } from '@icon-park/vue-next';
const emits = defineEmits(['handleSearchSuggestPopup']);
const search = ref('');
</script>

<style lang="scss">
.search_box {
    position: relative;

    .i-icon-search {
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
            padding-left: 40px;
        }

        .el-input__inner:focus {
            border: none;
            box-shadow: none;
        }
    }
}
</style>
