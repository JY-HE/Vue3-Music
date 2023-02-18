<template>
    <el-scrollbar>
        <div v-for="menu in menus" :key="menu.name" class="mb-6">
            <div class="h-9 flex items-center">{{ menu.name }}</div>
            <div
                v-for="(item, index) in menu.menus"
                :key="item.name"
                class="h-9 text-[1.125rem] flex items-center pl-4 menu"
                :class="item.key === currentKey ? 'active' : ''"
                @click="changeMenu(item)"
            >
                <IconPark :icon="item.icon" size="20" :theme="item.theme" />
                <span class="ml-4">{{ item.name }}</span>
            </div>
        </div>
    </el-scrollbar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useMenu } from '@/hooks/useMenu';
import { IMenu } from '@/models/menu';

const router = useRouter();
const { menus, setCurrentKey, currentKey } = useMenu();

watch(
    () => router.currentRoute.value.meta,
    newValue => {
        console.log('Rd ~ file: MenuList.vue:41 ~ newValue', newValue);
        setCurrentKey(newValue.menu as string);
    },
    { immediate: true }
);

const changeMenu = async (menu: IMenu) => {
    console.log('Rd ~ file: MenuList.vue:38 ~ changeMenu ~ menu', menu);
    setCurrentKey(menu.key);
    await router.push({ name: menu.key || '/', replace: true, params: {} });
};
</script>

<style lang="scss">
.menu {
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background-image: linear-gradient(to right, rgb(222, 222, 222), rgb(236, 234, 234));
    }
    &.active {
        background-image: linear-gradient(to right, rgb(31, 212, 174), rgb(30, 205, 151));
        color: #fff;
    }
}
</style>
