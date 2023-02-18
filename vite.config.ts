import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      // 指定引入根目录下的 requests，config，utils 目录内的所有函数
      dirs: ['./src/requests/**', './src/config/**', './src/utils/**'],
      resolvers: [ElementPlusResolver()],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: 'src/auto-import.d.ts',
      // 配置开启 eslint
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    // elementUi组件自动引入
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'src/components.d.ts',
    }),
    WindiCSS(),
  ],
  build: {
    outDir: 'dist', //指定输出路径
  },
  server: {
    port: 9999,
    // 设置 http 代理 跨域
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000', //需要访问的地址
        // target: 'https://netease-cloud-music-4xmo6vdfe-jy-he.vercel.app',
        changeOrigin: true,   //是否跨域
        secure: false,        //是否https接口
        rewrite: path => path.replace(/^\/api/, ''),   // 路径重写
      },
    }
  },
});
