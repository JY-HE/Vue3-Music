<template>
    <div class="operation_menu w-40 h-50 bg-[rgba(var(--theme-base),0.5)]">
        <div class="menu_icon" @click="getLogout">退出登录</div>
    </div>
</template>

<script setup lang="ts">
import { getLogout } from '@/service';

</script>

<style lang="scss">
.operation_menu {
    border-radius: 8px;
    padding: 16px;
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    color: rgba(var(--theme-text-color), 1);

    .menu_icon {
        width: 100%;
        height: 20px;
        line-height: 20px;
        &:hover {
            color: rgb(30, 205, 151);
        }
    }
}
</style>