import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import plugin from 'windicss/plugin';

export default defineConfig({
    extract: {
        include: ['**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git', 'dist'],
    },
    /* 将多个原子类组成一个新的shortcut类名，然后在页面中使用
     * shortcut的配置是方便了我们代码编写，但是对于包体积是有影响的
     */
    shortcuts: {
        'flex-center': 'flex justify-center items-center ',
        'flex-between-center': 'flex justify-between items-center',
        'flex-around-center': 'flex justify-around items-center',
        'wh-full': 'w-full h-full',
        // 二级菜单文字
        'text-style-menu-2': 'text-menu-text-2 text-[18px]'
    },
    // media:跟随系统（win10在个性化-颜色-选择默认应用模式  中修改）   class:手动通过事件改变
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                menu: {
                    bg: 'rgba(var(--theme-bg), 1)',
                    'text-2': 'rgba(var(--theme-text-color), 1)',
                },
                main: {
                    bg: 'rgba(var(--theme-bg), 0.9)'
                },
                head: {
                    text: "rgba(var(--theme-text-color), 1)"
                }
            },
        },
    },
});
