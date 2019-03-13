"use strict";
import * as types from './types';

//初始化状态
const state = {
    rwdid: 10, //地区id


};

//获取数据
const getters = {
    rwdid: state => state.rwdid, //地区id
};
//数据保存方法
const mutations = {
    [types.SET_LEFT_DATA](state, rwdid) {
        state.rwdid = rwdid;
    },
};

export default {
    state, getters, mutations
}