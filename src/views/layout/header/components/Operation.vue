<template>
    <div class="operation flex items-center text-head-text">
        <div class="head_picture w-9 h-9 mr-4 flex-center">
            <img :src="profile.avatarUrl" alt="" v-if="isLogin" class="wh-full" />
            <JyIconfont icon="&#xe60f;" v-else class="!text-[38px] !m-0"/>
        </div>
        <div class="mr-4" @click="handleLogin" v-if="!isLogin">点击登录</div>
        <div class="mr-4" v-else>{{ profile.nickname }}</div>
        <JyIconfont
            :icon="state.isThemeDark ? '&#xe67f;' : '&#xe7cb;'"
            @click="handleThemeChange"
        />
        <JyIconfont icon="&#xe790;" title="主菜单" @click="state.isShowOperationMenu = !state.isShowOperationMenu"/>

        <QrPopup :unikey="state.qrkey" :qrimg="state.qrimg" v-if="showLoginPopup"/>
        <OperationMenu v-if="state.isShowOperationMenu"/>
    </div>
</template>

<script setup lang="ts">
import QrPopup from "./QrPopup.vue";
import OperationMenu from "./OperationMenu.vue";
import { getQrKey, getQrCreate, getLoginStatus } from '@/service';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const { setCookie, setProfile, setShowLogin, setClearData } = useUserStore();
const { isLogin, profile, showLoginPopup } = storeToRefs(useUserStore());

const state = reactive({
    qrkey: '',
    qrimg: '',
    isThemeDark: false,
    isShowOperationMenu:false
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

/**
 * @description: 切换黑夜和白天模式
 */
const handleThemeChange = () => {
    state.isThemeDark = !state.isThemeDark;
    if (state.isThemeDark) {
        localStorage.setItem('theme', 'dark');
        document.querySelectorAll('html')[0].setAttribute('theme-mode', 'dark');
    } else {
        localStorage.removeItem('theme');
        document.querySelectorAll('html')[0].setAttribute('theme-mode', 'light');
    }
};
</script>

<style lang="scss">
.operation {
    position: relative;
    div,
    span {
        cursor: pointer;
    }

    .head_picture{
        img{
            border-radius: 50%;
        }
    }

    .qr_popup {
        position: absolute;
        top: 125%;
        left: -104px;
        z-index: 10;
    }

    .operation_menu{
        position: absolute;
        top: 125%;
        left: 28px;
        z-index: 10;
    }

    .JyIconfont {
        font-size: 24px;
        margin-right: 1rem;
        cursor: pointer;
    }
}
</style>
