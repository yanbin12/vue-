/**
 * @param { String } curEle 元素
 * @return { top, left } 元素的top 和 left 值
 * 示例: offset(el).[top, left]
 */
export const offset = function offset(curEle) {
    let t = curEle.offsetTop,
        l = curEle.offsetLeft,
        p = curEle.offsetParent;
    while (p) {
        if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
            t += p.clientTop;
            l += p.clientLeft;
        }
        t += p.offsetTop;
        l += p.offsetLeft;
        p = p.offsetParent;
    }
    return {
        top: t,
        left: l
    }
};