
/**
 * @description: 处理数字格式
 * @param {number | string} num
 * @return {string}
 */
export const handleNumFormat = (num: number | string) => num.toString().replace(/\d+/, (
    n
) => n.replace(/(\d)(?=(\d{3})+$)/g, $1 => `${$1},`))

/**
 * @description: 数字过滤器
 * @param {string | number} number
 * @return {string}
 */
export const getNumberFormat = (number: string | number) => {
    const num = Number(number);
    if (num) {
        if (num === 0 || (num >= 1 && num <= 99999)) {
            return `${handleNumFormat(num)}`;
        }
        if (num <= 1000000) {
            return `${handleNumFormat((num / 10000).toFixed(2))}万`;
        }
        return `${handleNumFormat((num / 10000).toFixed(1))}万`;
    }
    return '0';
}

/**
 * @description: 时间过滤器
 * @param {string} duration
 * @param {boolean} getUnit
 * @return {string}
 */
export const getTimeFormat = (duration: string, getUnit: boolean = false) => {
    let minute = 0
    if (duration) {
        minute = Number(parseFloat(duration).toFixed(0));
        let day = 0;
        let hour = 0;
        let unit = '分钟'
        if (minute > 99999) {
            hour = Number((minute / 60).toFixed(0));
            if (hour > 99999) {
                day = Number((minute / 60 / 24).toFixed(0));
                minute = day;
                unit = '天';
            } else {
                minute = hour;
                unit = '小时';
            }
        }
        if (getUnit) return unit;
    }
    return minute ? `${handleNumFormat(minute)}` : '0';

}
