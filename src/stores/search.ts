import { defineStore } from 'pinia';
import type { IHotSearchList } from '@/models/search';

export const useSearchStore = defineStore('search', {
    state: () => {
        return {
            keyword: '' as string,
            hotSearchList: [] as IHotSearchList[], // 热搜列表
            searchHistoryList: [] as string[], // 搜索历史
        };
    },
    getters: {},
    actions: {
        /**
         * @description: 设置搜索关键词
         */
        setKeyword(keyword: string) {
            this.keyword = keyword;
        },

        /**
         * @description: 设置热搜列表
         */
        setHotSearchList() { },

        /**
         * @description: 设置搜索历史列表
         */
        setSearchHistoryList(keyword: string) {
            this.searchHistoryList.unshift(keyword);
            if (this.searchHistoryList.length > 10) {
                this.searchHistoryList.splice(10, 1);
            }
            window.localStorage.setItem('SearchHistory', JSON.stringify(this.searchHistoryList));
        },
        /**
         * @description: 清空搜索历史列表
         */
        clearSearchHistoryList() {
            this.searchHistoryList = [];
            window.localStorage.setItem('SearchHistory', JSON.stringify(this.searchHistoryList));
        },
        /**
         * @description: 从localStorage获取历史搜索
         */
        getSearchHistoryList() {
            const searchHistory = JSON.parse(
                window.localStorage.getItem('SearchHistory') as string
            );
            this.searchHistoryList = searchHistory || [];
        },
    },
});
