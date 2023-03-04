/*
 * @Author: HeJiaYong
 * @Date: 2023-02-26 21:06:49
 * @LastEditors: HeJiaYong
 * @LastEditTime: 2023-03-04 11:33:42
 * @FilePath: \Vue3-Music\src\service\searchService.ts
 * @Description:  处理关于搜索的相关api服务
 *
 */

import { http } from './http';
import type { IHotSearchList } from '@/models/search';

/**
 * @description: 获取热搜列表
 * @return {Object} { code: number, data: IHotSearchList, message: string }
 */
export const getHotSearch = async () => {
    const result = await http.get<{ code: number; data: IHotSearchList[]; message: string }>(
        '/search/hot/detail'
    );
    return result;
};

/**
 * @description: 关键词搜索歌曲
 * @return {Object} { code: number, data: IHotSearchList, message: string }
 */
export const getKeywordSearch = async (keywords: string) => {
    const result = await http.get<{ code: number; result: { searchQcReminder: any, songs: any[], songCount: number } }>(
        '/cloudsearch',
        { keywords: keywords }
    );
    return result;
};
