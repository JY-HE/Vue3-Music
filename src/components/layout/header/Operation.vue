<template>
    <div class="operation flex items-center">
        <div class="head_picture w-9 h-9 mr-4">
            <img :src="profile.avatarUrl" alt="" v-if="isLogin" class="wh-full" />
        </div>
        <div class="mr-4" @click="handleLogin" v-if="!isLogin">点击登录</div>
        <div class="mr-4" v-else>{{ profile.nickname }}</div>
        <iconMoon theme="outline" size="24" fill="#333" class="mr-4" title="黑夜模式" />
        <iconHamburgerButton theme="outline" size="24" fill="#333" class="mr-4" title="主菜单" />

        <QrPopup :unikey="state.qrkey" :qrimg="state.qrimg" v-if="showLoginPopup"></QrPopup>
    </div>
</template>

<script setup lang="ts">
import { Moon as iconMoon, HamburgerButton as iconHamburgerButton } from '@icon-park/vue-next';
import { useUserStore } from '@/stores/user';
import { useQrKey, useQrCreate } from '@/hooks';
import { storeToRefs } from 'pinia';

const { setShowLogin, setCookie, checkLogin } = useUserStore();
const { isLogin, profile, showLoginPopup } = storeToRefs(useUserStore());

const state = reactive({
    qrkey: '',
    qrimg: '',
});

onMounted(() => {
    const cookie = window.localStorage.getItem('USER-COOKIE') || '';
    if (cookie) {
        setCookie(cookie);
        checkLogin();
    }
});

const handleLogin = async () => {
    setShowLogin(true);
    const { code, unikey } = await useQrKey();
    if (code !== 200) {
        console.error('Rd ~ getUnikey ~ error', code);
        return;
    }
    state.qrkey = unikey;
    const qrData = await useQrCreate(unikey);
    if (qrData.code !== 200) {
        console.error('Rd ~ getQrData ~ error', qrData.code);
        return;
    }
    state.qrimg = qrData.data.qrimg;
};
</script>

<style lang="scss">
.operation {
    position: relative;
    div,
    span {
        cursor: pointer;
    }

    .head_picture {
        background-color: #ccc;
        border-radius: 100%;

        img {
            border-radius: 100%;
        }
    }

    .i-icon-hamburger-button {
        &:hover {
            color: aquamarine;
        }
    }

    .qr_popup {
        position: absolute;
        top: 125%;
        left: -104px;
        z-index: 10;
    }
}
</style>
