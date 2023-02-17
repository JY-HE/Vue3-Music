<template>
    <div class="operation flex items-center">
        <div class="head_picture w-9 h-9 mr-4"></div>
        <div class="mr-4">点击登录</div>
        <iconMoon theme="outline" size="24" fill="#333" class="mr-4" />
        <iconHamburgerButton theme="outline" size="24" fill="#333" class="mr-4" />
    </div>
</template>

<script setup lang="ts">
import { Moon as iconMoon, HamburgerButton as iconHamburgerButton } from '@icon-park/vue-next';
</script>

<style lang="scss">
.operation {
    div,
    span {
        cursor: pointer;
    }

    .head_picture {
        background-color: #ccc;
        border-radius: 100%;
    }
}
</style>
