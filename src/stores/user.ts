import { defineStore } from 'pinia';
import { useQrCheck, useLoginStatus } from '@/hooks';
import type { UserProfile } from '@/models/user';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            cookie: '',
            showLoginPopup: false,
            profile: {} as UserProfile,
        };
    },
    getters: {
        // 判断用户是否登录
        isLogin: state => {
            return state.profile?.userId > 0;
        },
    },
    actions: {
        /**
         * @description: 获取二维码检测扫码状态方法
         * @param {string} key
         * @return {*}
         */
        async login(key: string) {
            const res = await useQrCheck(key);
            if (res.code == 803) {
                this.cookie = res.cookie;
                localStorage.setItem('USER-COOKIE', this.cookie);
                this.checkLogin();
            } else {
                console.log("Rd ~ QrStatus", res.message)
            }
        },
        /**
         * @description: 获取用户登录状态方法
         * @return {*}
         */
        async checkLogin() {
            const data = await useLoginStatus();
            if (data.code === 200) {
                this.profile = data.profile;
                this.setShowLogin(false)
            } else {
                console.error("用户未登录", data)
            }
        },
        /**
         * @description: 控制登录弹框显隐
         * @param {boolean} status
         * @return {*}
         */
        setShowLogin(status: boolean) {
            this.showLoginPopup = status;
        },
        /**
         * @description: 设置cookie
         * @param {string} cookie
         * @return {*}
         */
        setCookie(cookie: string) {
            this.cookie = cookie;
        }
    },
});
