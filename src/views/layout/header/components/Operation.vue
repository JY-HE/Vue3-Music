<template>
    <div class="operation flex items-center">
        <div class="head_picture w-9 h-9 mr-4">
            <img :src="profile.avatarUrl" alt="" v-if="isLogin" class="wh-full" />
        </div>
        <div class="mr-4" @click="handleLogin" v-if="!isLogin">点击登录</div>
        <div class="mr-4" v-else>{{ profile.nickname }}</div>
        <iconMoon
            theme="outline"
            size="24"
            fill="#333"
            class="mr-4"
            title="黑夜模式"
            @click="getLogout"
        />
        <iconHamburgerButton theme="outline" size="24" fill="#333" class="mr-4" title="主菜单" />

        <QrPopup :unikey="state.qrkey" :qrimg="state.qrimg" v-if="showLoginPopup"></QrPopup>
    </div>
</template>

<script setup lang="ts">
import { Moon as iconMoon, HamburgerButton as iconHamburgerButton } from '@icon-park/vue-next';
import { getQrKey, getQrCreate, getLoginStatus, getLogout } from '@/service';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const { setCookie, setProfile, setShowLogin, setClearData } = useUserStore();
const { isLogin, profile, showLoginPopup } = storeToRefs(useUserStore());

const state = reactive({
    qrkey: '',
    qrimg: '',
});

onMounted(() => {
    initLoginStatus();
});

/**
 * @description: 初始化用户登录状态
 */
const initLoginStatus = async () => {
    const { code, profile } = await getLoginStatus();
    if (code === 200 && profile) {
        console.debug('登录成功');
        setCookie(localStorage.getItem('USER-COOKIE') || '');
        setProfile(profile);
        setShowLogin(false);
    } else {
        setClearData();
        console.error('用户未登录');
    }
};

/**
 * @description: 点击立即登录
 * @return {*}
 */
const handleLogin = async () => {
    setShowLogin(true);
    const { code, unikey } = await getQrKey();
    if (code !== 200) {
        console.error('Rd ~ getUnikey ~ error', code);
        return;
    }
    state.qrkey = unikey;
    const qrData = await getQrCreate(unikey);
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
