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
    },
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                menuBg: '#f7f8fa',
                mainBg: '#f5f5f5',
            },
        },
    },
});
