<template>
    <JyIconfont icon="&#xea83;" class="mr-2 text-[16px] text-head-text" @click="router.go(-1)"/>
    <JyIconfont icon="&#xe650;" class="ml-2 text-[16px] text-head-text" @click="router.go(1)"/>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss">
.i-icon-left,
.i-icon-right {
    cursor: pointer;
}
</style>
