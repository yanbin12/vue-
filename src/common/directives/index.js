import Vue from 'vue'
import * as dom from './dom'

/**
 * 计算内容的高度 以显示滚动条
 * 滚动高度条 窗口高度 - 元素距离body的偏移量 - binding.value || 0
 * v-scrollHeight[, ={Number}]
 */
Vue.directive('scrollHeight',(el, binding, vnode, oldnode) => {
    function resizeH () {
        let subtract = binding.value || 0
        let win = document.documentElement.clientHeight
        let offTop = dom.offset(el).top

        el.style.height = win - offTop - subtract + 'px'
        el.style.overflowY = 'auto'
        el.style.width = '100%'
    }
    setTimeout(() => {
        resizeH ()
    })
    window.addEventListener("resize", () => {
        resizeH()
    },false)
});