<template>
    <iconLeft theme="outline" size="16" fill="#333" class="mr-2" @click="router.go(-1)" />
    <iconRight theme="outline" size="16" fill="#333" class="ml-2" @click="router.go(1)" />
</template>

<script setup lang="ts">
import { Left as iconLeft, Right as iconRight } from '@icon-park/vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss">
.i-icon-left,
.i-icon-right {
    cursor: pointer;
}
</style>
