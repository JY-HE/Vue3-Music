<template>
    <div class="w-screen h-screen flex items-stretch overflow-hidden">
        <div class="w-56 h-screen flex-shrink-0 menu_root">
            <MenuList />
        </div>
        <div class="flex-1 flex flex-col main_root">
            <div class="h-14">
                <Header />
            </div>
            <div class="flex-1 overflow-hidden">
                <el-scrollbar>
                    <div class="container px-4">
                        <router-view />
                    </div>
                </el-scrollbar>
            </div>
            <div class="h-20 text-[red]">
                <Footer />
            </div>
        </div>

        <PlayList />
    </div>
</template>

<script setup lang="ts">
import MenuList from '@/views/layout/menu/MenuList.vue';
import Header from '@/views/layout/header/Header.vue';
import Footer from '@/views/layout/footer/Footer.vue';
import PlayList from '@/views/layout/playList/PlayList.vue';
</script>

<style lang="scss">
.menu_root {
    @include menuBackground(1, background);
}
.main_root {
    @include mainBackground(1, background);
}
</style>
