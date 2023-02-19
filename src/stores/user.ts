import { defineStore } from 'pinia';
import type { IUserProfile } from '@/models/user';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            cookie: '',
            showLoginPopup: false,
            profile: {} as IUserProfile,
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
         * @description: 设置cookie
         * @param {string} cookie
         */
        setCookie(cookie: string) {
            this.cookie = cookie;
        },
        /**
         * @description: 设置profile
         * @param {IUserProfile} profile
         */
        setProfile(profile: IUserProfile) {
            this.profile = profile;
        },
        /**
         * @description: 设置控制登录弹框显隐
         * @param {boolean} status
         */
        setShowLogin(status: boolean) {
            this.showLoginPopup = status;
        },
        /**
         * @description: 未登录清空数据
         */
        setClearData() {
            this.cookie = '';
            this.profile = {} as IUserProfile;
            localStorage.removeItem('USER-COOKIE');
        },
    },
});
