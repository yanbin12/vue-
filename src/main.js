import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import store from "./vuex/store";
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import '../static/css/icon.css';
import "babel-polyfill";
// 引入公用组件
import "./common/components";
// 引用全局过滤器
import "./common/filters";
// 引用全局自定义指令
import './common/directives'

// 打印插件
// 判断浏览器类型
Vue.prototype.myBrowser = function() {
    let type = ''
    var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
    var isFF = userAgent.indexOf('Firefox') > -1 //判断是否Firefox浏览器
    var isEdge = userAgent.indexOf('Trident') > -1 //判断是否Edge浏览器
    if (isFF) {
    type = 'Firefox'
    } else if (isEdge) {
    type = 'IE'
    }
    return type
    }
Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;

//使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     const role = localStorage.getItem('ms_username');
//     if(!role && to.path !== '/login'){
//         next('/login');
//     }else if(to.meta.permission){
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin' ? next() : next('/403');
//     }else{
//         // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//         if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
//             Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//                 confirmButtonText: '确定'
//             });
//         }else{
//             next();
//         }
//     }
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');