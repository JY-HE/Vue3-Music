/*
 * @Author: HeJiaYong
 * @Date: 2023-02-18 09:38:59
 * @LastEditors: HeJiaYong
 * @LastEditTime: 2023-02-18 15:18:21
 * @FilePath: \Vue3-Music\src\models\menu.ts
 * @Description:  左侧菜单interface
 * 
 */

// 一级菜单
export interface IMenus {
    name: string;
    menus: IMenu[];
}

// 二级菜单
export interface IMenu {
    name: string;
    key: string;
    icon: any;
    theme: 'outline' | 'filled' | 'two-tone' | 'multi-color';
}