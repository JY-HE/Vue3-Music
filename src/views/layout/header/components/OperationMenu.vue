<template>
    <div class="operation_menu w-40 h-50">
        <div class="menu_item" @click="handleLogout">退出登录</div>
    </div>
</template>

<script setup lang="ts">
import { getLogout } from '@/service';
import { useUserStore } from "@/stores/user";

const { setClearData } = useUserStore()

/**
 * @description: 处理退出登录
 * @return {*}
 */
const handleLogout = async () => {
    const { code } = await getLogout()
    if (code === 200) {
        console.debug('退出登录');
        setClearData()
    }
}
</script>

<style lang="scss">
.operation_menu {
    border-radius: 8px;
    padding: 16px;
    display: flex;
    justify-content: flex-start;
    @include themeColor(0.5, background);

    .menu_item {
        width: 100%;
        @include fontStyle(4);
        @include fontColor(2);
        @include textHidden;

        &:hover {
            @include normalColor(1, color)
        }
    }
}
</style>