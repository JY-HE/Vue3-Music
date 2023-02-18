<template>
    <div class="qr_popup w-50 h-60 flex-center flex-col">
        <div>扫码登录</div>
        <div v-if="!qrimg" v-loading="!qrimg" class="w-35 h-35 my-4"></div>
        <img :src="qrimg" alt="" class="w-35 h-35 my-4" v-else />
        <div class="text-[14px]">使用网易云音乐APP扫码登录</div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const props = defineProps({
    unikey: { type: String, default: '' },
    qrimg: { type: String, default: '' },
});

let timer: number = 0;

const { login } = useUserStore();

onMounted(() => {
    timer = window.setInterval(async () => {
        await login(props.unikey);
    }, 3000);
});

onUnmounted(() => {
    clearInterval(timer);
    timer = 0;
});
</script>

<style lang="scss">
.qr_popup {
    background-color: #fff;
}
</style>
