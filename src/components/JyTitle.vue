<template>
    <div class="JyTitle">
        <div class="leftBox">
            <div class="title">{{ title }}</div>
            <div v-if="$slots.operation" class="operation">
                <slot name="operation"></slot>
            </div>
        </div>
        <div class="showMore" v-if="showMoreButton" @click="emits('clickShowMore')">
            <span>更多</span>
            <JyIconfont icon="&#xe650;" class="ml-1" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: { type: String, default: '' },
    showMoreButton: { type: Boolean, default: true },
});
const emits = defineEmits(['clickShowMore'])
</script>

<style lang="scss">
.JyTitle {
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include themeOppositeColor(1, color);

    .leftBox {
        height: 100%;
        display: flex;
        align-items: center;

        .title {
            height: 100%;
            display: flex;
            align-items: center;
            @include fontStyle(1);
        }

        .operation {
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: 16px;
            @include fontStyle(6);
            @include fontColor(1);
        }
    }

    .showMore {
        display: flex;
        align-items: center;
        @include fontStyle(6);

        .JyIconfont {
            font-size: 12px;
        }
    }
}
</style>
