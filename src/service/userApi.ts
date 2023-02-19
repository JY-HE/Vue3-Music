/*
 * @Author: HeJiaYong
 * @Date: 2023-02-18 15:28:54
 * @LastEditors: HeJiaYong
 * @LastEditTime: 2023-02-19 12:51:24
 * @FilePath: \Vue3-Music\src\service\userApi.ts
 * @Description:  关于用户api请求的业务文件
 *
 */
import { http } from '@/service';
import type { IUserProfile, IUserAccount } from '@/models/user';

/**
 * @description: 登录二维码key生成api
 * @return {*}
 */
export const qrKeyApi = () => {
    return http.get<{ code: number, data: { code: number, unikey: string } }>('/api/login/qr/key');
}

/**
 * @description: 二维码图片生成api
 * @param {string} key
 * @return {*}
 */
export const qrCreateApi = (key: string, qrimg: boolean = true) => {
    return http.get<{ code: number, data: { qrurl: string, qrimg: string } }>('/api/login/qr/create', { key: key, qrimg: qrimg });
}

/**
 * @description: 二维码检测扫码状态api : 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
 * @param {string} key
 * @return {*}
 */
export const qrCheckApi = (key: string) => {
    return http.get<{ code: number, message: string, cookie: string }>('/api/login/qr/check', { key: key });
}

/**
 * @description: 获取用户登录状态api
 * @return {*}
 */
export const loginStatusApi = () => {
    return http.get<{ data: { code: number, profile: IUserProfile, account: IUserAccount } }>(
        '/api/login/status'
    );
};

/**
 * @description: 退出登录api
 * @return {*}
 */
export const logoutApi = () => {
    return http.get<{ code: number }>('/api/logout')
}
