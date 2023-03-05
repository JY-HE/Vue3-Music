<template>
    <div class="nav_box">
        <JyIconfont icon="&#xea83;" class=" mr-2" @click="router.go(-1)"/>
        <JyIconfont icon="&#xe650;" class=" ml-2" @click="router.go(1)"/>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss">
.nav_box{
    .JyIconfont{
        @include iconSize(4);
        cursor: pointer;
        @include fontColor(1)
    }
}

</style>
