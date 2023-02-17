export const useSearch = () => {
    const isShowSearchPopup = ref(false);

    // 输入框获取焦点
    const searchFocus = () => {
        isShowSearchPopup.value = true;
    };

    // 输入框失去焦点
    const searchBlur = () => {
        isShowSearchPopup.value = false;
    };

    return {
        isShowSearchPopup,
        searchFocus,
        searchBlur
    }
};
