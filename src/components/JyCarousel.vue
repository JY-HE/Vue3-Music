<template>
    <div class="JyCarousel">
        <el-carousel
            :initial-index="initialIndex"
            :autoplay="autoplay"
            :interval="interval"
            indicator-position="outside"
            :loop="loop"
            :pause-on-hover="pauseOnHover"
        >
            <el-carousel-item v-for="(data, index) in chunk(dataList, props.cardNumber)" :key="index">
                <div class="playlist_item" v-for="(item, ind) in data" :key="ind" @click="emits('click',item)">
                    <slot name="playlistItem" :data="item"></slot>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    // 初始状态激活的幻灯片的索引，从 0 开始
    initialIndex: { type: Number, default: 0 },
    // 	是否自动切换
    autoplay: { type: Boolean, default: true },
    // 自动切换的时间间隔，单位为毫秒
    interval: { type: Number, default: 6000 },
    // 是否循环显示
    loop: { type: Boolean, default: true },
    // 鼠标悬浮时暂停自动切换
    pauseOnHover: { type: Boolean, default: true },
    // 是否显示指示器
    showIndicators: { type: Boolean, default: true },
    // 数据
    dataList: { type: Array, default: () => [] },
    // 每页需要展示的卡片数量
    cardNumber: { type: Number, default: 3 },
});
const emits = defineEmits(['click'])

const isShowIndicators = ref('block');

watch(
    () => props.showIndicators,
    newVal => {
        isShowIndicators.value = newVal ? 'block' : 'none';
    }
);

/**
 * @description: 将一维数组转为多维数组
 * @param {Array} array 数组
 * @param {Number} size 需要转为几维数组
 * @return {Array}
 */
const chunk = (array: any[], size: number = 1) => {
    if (!array.length || size < 1) return [];
    let index = 0;
    let resIndex = 0;
    const result = new Array(Math.ceil(length / size));
    while (index < array.length) {
        result[resIndex++] = array.slice(index, (index += size));
    }
    return result;
};
</script>

<style lang="scss">
.JyCarousel {
    .el-carousel {
        .el-carousel__container {
            .el-carousel__arrow {
                background-color: transparent;
                &:hover {
                    background-color: transparent;
                }
                .el-icon {
                    width: 3em;
                    height: 3em;
                    @include themeOppositeColor(0.5, color);

                    &:hover {
                        @include normalColor(1, color);
                    }
                    svg {
                        width: 3em;
                        height: 3em;
                    }
                }
                &.el-carousel__arrow--left {
                    left: 0;
                }
                &.el-carousel__arrow--right {
                    right: 0;
                }
            }
            .el-carousel__item {
                display: flex;
                align-items: center;
                padding: 0 40px;

                .playlist_item {
                    flex: 1;
                    height: 100%;
                    cursor: pointer;
                    @include greyColor(1, background);
                    border-radius: 16px;
                    margin-right: 16px;
                    &:nth-last-child(1) {
                        margin-right: 0;
                    }
                    img {
                        border-radius: 16px;
                    }
                }
            }
        }
        .el-carousel__indicators {
            display: v-bind(isShowIndicators);
            .el-carousel__indicator {
                .el-carousel__button {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    @include greyColor(1, background);
                }
                &.is-active {
                    .el-carousel__button {
                        @include normalColor(1, background);
                    }
                }
            }
        }
    }
}
</style>
