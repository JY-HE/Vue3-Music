/*
 * @Author: HeJiaYong
 * @Date: 2023-02-18 15:28:54
 * @LastEditors: HeJiaYong
 * @LastEditTime: 2023-02-18 20:43:53
 * @FilePath: \Vue3-Music\src\hooks\useUserApi.ts
 * @Description:  关于用户api请求的业务文件
 *
 */
import http from '@/service/http';
import type { UserProfile } from '@/models/user';

/**
 * @description: 用户登录api
 * @param {string} phone
 * @param {string} password
 * @return {*}
 */
export const useLogin = async (phone: string, password: string) => {
    return await http.get<{
        code: number;
        cookie: string;
        token: string;
    }>('/api/login/cellphone', { phone: phone, password: password });
};

/**
 * @description: 登录二维码key生成api
 * @return {*}
 */
export const useQrKey = async () => {
    const { data } = await http.get<{ data: { code: number; unikey: string } }>('/api/login/qr/key');
    return data
}

/**
 * @description: 二维码图片生成api
 * @param {string} key
 * @return {*}
 */
export const useQrCreate = async (key: string, qrimg: boolean = true) => {
    return await http.get<{ code: number, data: { qrurl: string; qrimg: string } }>('/api/login/qr/create', { key: key, qrimg: qrimg });
}

/**
 * @description: 二维码检测扫码状态api : 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
 * @param {string} key
 * @return {*}
 */
export const useQrCheck = async (key: string) => {
    return await http.get<{ code: number, message: string, cookie: string }>('/api/login/qr/check', { key: key });
}

/**
 * @description: 获取用户登录状态api
 * @return {*}
 */
export const useLoginStatus = async () => {
    const { data } = await http.get<{ data: { code: number; profile: UserProfile } }>(
        '/api/login/status'
    );
    return data;
};
