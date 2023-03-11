/*
 * @Author: HeJiaYong
 * @Date: 2023-03-11 23:34:31
 * @LastEditors: HeJiaYong
 * @LastEditTime: 2023-03-12 00:10:29
 * @FilePath: \Vue3-Music\src\service\music.ts
 * @Description:  集合各个获取音乐的Api
 * 
 */
import { http } from './http';


/**
 * @description: 获取网友精选碟歌单
 * @param {string} order 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
 * @param {number} limit 取出歌单数量 , 默认为 9
 * @param {number} offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*9, 其中 9 为 limit 的值
 * @return {*}
 */
export const getHandpickPlaylist = async (order: string = 'hot', limit: number = 9, offset?: number) => {
    const result = await http.get<{ code: number, playlists: any[], total: number, cat: string, more: boolean }>(
        '/top/playlist', { order: order, limit: limit, offset: offset }
    );
    return result;
};

/**
 * @description: 新碟上架列表 , 如需具体音乐信息需要调用获取专辑列表接 口 /album , 然后传入 id, 如 /album?id=32311
 * @param {string} area ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
 * @param {string} type new:全部 hot:热门,默认为 hot
 * @param {number} limit 取出专辑数量 , 默认为 9
 * @return {*}
 */
export const getNewAlbum = async (area: string = 'ALL', type: string = 'hot', limit: number = 9) => {
    const result = await http.get<{ code: number, weekData: any[], monthData: any[], hasMore: boolean }>(
        '/top/album', { area: area, type: type, limit: limit }
    );
    return result;
};
