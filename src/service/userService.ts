/*
 * @Author: HeJiaYong
 * @Date: 2023-02-19 12:06:23
 * @LastEditors: HeJiaYong
 * @LastEditTime: 2023-02-25 14:09:52
 * @FilePath: \Vue3-Music\src\service\userService.ts
 * @Description:  处理关于用户层相关api服务
 * 
 */
import { http } from "./http";
import type { IUserProfile, IUserAccount } from '@/models/user';

/**
 * @description: 获取登录二维码key
 * @return {Object} { code: number, unikey: string }
 */
export const getQrKey = async () => {
    const { data } = await http.get<{ code: number, data: { code: number, unikey: string } }>('/api/login/qr/key');
    return data
}

/**
 * @description: 获取登录二维码图片
 * @param {string} key 二维码key
 * @param {boolean} qrimg 传入后会额外返回二维码图片 base64 编码
 * @return {Object} { code: number, data: { qrurl: string, qrimg: string } }
 */
export const getQrCreate = async (key: string, qrimg: boolean = true) => {
    const data = await http.get<{ code: number, data: { qrurl: string, qrimg: string } }>('/api/login/qr/create', { key: key, qrimg: qrimg });
    return data
}

/**
 * @description: 获取二维码扫描状态
 * 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
 * @param {string} key 二维码key
 * @return {Object} { code: number, message: string, cookie: string }
 */
export const getQrCheck = async (key: string) => {
    const data = await http.get<{ code: number, message: string, cookie: string }>('/api/login/qr/check', { key: key });
    return data
}

/**
 * @description: 获取用户登录状态
 * @return {Object} { code: number, profile: IUserProfile, account: IUserAccount }
 */
export const getLoginStatus = async () => {
    const { data } = await http.get<{ data: { code: number, profile: IUserProfile, account: IUserAccount } }>(
        '/api/login/status'
    );
    return data
}

/**
 * @description: 用户退出登录
 * @return {Object} { code: number }
 */
export const getLogout = async () => {
    const data = await http.get<{ code: number }>('/api/logout')
    return data
}