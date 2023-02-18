<template>
    <div class="w-screen h-screen flex items-stretch overflow-hidden">
        <div class="w-56 h-screen flex-shrink-0 bg-[#f5f5f5]">
            <Menu />
        </div>
        <div class="flex-1 flex flex-col bg-[#f7f8fa]">
            <div class="h-14">
                <Header />
            </div>
            <div class="flex-1 overflow-hidden">
                <el-scrollbar>
                    <div class="container mx-auto">
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
import Menu from '@/components/layout/menu/Index.vue';
import Header from '@/components/layout/header/Index.vue';
import Footer from '@/components/layout/footer/Footer.vue';
import PlayList from '@/components/layout/playList/PlayList.vue';
</script>
<style lang="scss"></style>
