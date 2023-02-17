
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