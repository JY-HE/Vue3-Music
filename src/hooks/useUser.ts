/*
 * @Author: HeJiaYong
 * @Date: 2023-02-19 12:06:23
 * @LastEditors: HeJiaYong
 * @LastEditTime: 2023-02-19 12:56:04
 * @FilePath: \Vue3-Music\src\hooks\useUser.ts
 * @Description:  处理关于用户api业务文件
 * 
 */

import { qrKeyApi, qrCreateApi, qrCheckApi, loginStatusApi, logoutApi } from "@/service";

/**
 * @description: 获取登录二维码key
 * @return {Object} { code: number, unikey: string }
 */
export const getQrKey = async () => {
    const { data } = await qrKeyApi()
    return data
}

/**
 * @description: 获取登录二维码图片
 * @param {string} key 二维码key
 * @param {boolean} qrimg 传入后会额外返回二维码图片 base64 编码
 * @return {Object} { code: number, data: { qrurl: string, qrimg: string } }
 */
export const getQrCreate = async (key: string, qrimg: boolean = true) => {
    const data = await qrCreateApi(key, qrimg)
    return data
}

/**
 * @description: 获取二维码扫描状态
 * 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
 * @param {string} key 二维码key
 * @return {Object} { code: number, message: string, cookie: string }
 */
export const getQrCheck = async (key: string) => {
    const data = await qrCheckApi(key)
    return data
}

/**
 * @description: 获取用户登录状态
 * @return {Object} { code: number, profile: IUserProfile,account: IUserAccount }
 */
export const getLoginStatus = async () => {
    const { data } = await loginStatusApi()
    return data
}

/**
 * @description: 用户退出登录
 * @return {Object} { code: number }
 */
export const getLogout = async () => {
    const data = await logoutApi()
    return data
}