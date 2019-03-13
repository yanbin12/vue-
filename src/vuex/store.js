"use strict";

import Vue from "vue";
import Vuex from "vuex";

import vuexPersistedstate from 'vuex-persistedstate'
//views中modules
import store from "./module/store";

//...

// 新增新产品tab
Vue.use(Vuex);

// 创建 store 实例
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    modules: {
        store
    },
    plugins: [vuexPersistedstate()] //引入vuexPersistedstate 用于缓存
});
