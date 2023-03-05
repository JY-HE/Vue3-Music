<template>
    <div class="JyNav">
        <div v-for="(item, index) in navList" :key="item.name" class="navItem"
            :class="index === currentIndex ? 'active' : ''" @click="handleClick(item, index)">
            {{ item.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    navList: { type: Array<{ name: string, path: string }>, default: () => [] },
});
const emits = defineEmits(['click']);

const currentIndex = ref(0);

const handleClick = (navItem: any, index: number) => {
    currentIndex.value = index;
    emits('click', navItem)
};
</script>

<style lang="scss">
.JyNav {
    height: 46px;
    display: flex;
    align-items: center;
    @include themeOppositeColor(1, color);

    .navItem {
        margin: 0 16px;
        cursor: pointer;
        @include fontStyle(4);

        &:hover {
            @include normalColor(1, color)
        }

        &.active {
            border-bottom: 3px solid rgb(var(--normalColor));
        }

        &:nth-child(1){
            margin-left: 0;
        }
    }
}
</style>
