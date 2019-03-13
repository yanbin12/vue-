import Vue from 'vue';
let ElementUI = new Vue();
/**
 * 正则时时数字
 */
export const onlyNumber = function (parameter) {
    return parameter = parameter.replace(/^(0+)|[^\d]+/g,'')
} 
/**
 * 正则时时汉字
 */
export const onlyChinese = function(parameter){
    return parameter=parameter.replace(/[^\u4e00-\u9fa5]/g,'')
}
/**
 * 正则时时验证
 */
export const validateOrder = function (parameter,ruleData) {
    // count 为记录有满足几个判断条件 
    let count = 0
    for(let index  in  ruleData.content){
        // 判断为必填项的正则
        if(!(ruleData.content[index].rule.test(parameter.content)) && ruleData.mustFill){
            
            ElementUI.$notify({
                title: "错误",
                message: `${ruleData.content[index].msg}`,
                type: "error",
                customClass:"position-center",
                duration:1000
            });
            return false
        }else{
            // 判断为非必填项的正则 
            // 根据条件把非空的的判断条件去掉
            if(index >= 1 ){
                if( parameter.content.length >0 && (!(ruleData.content[index].rule.test(parameter.content)))){
                    ElementUI.$notify({
                        title: "错误",
                        message: `${ruleData.content[index].msg}`,
                        type: "error",
                        customClass:"position-center",
                        duration:1000
                    });
                    return false
                }else{
                    count++

                }
            }else{
                count++
            }
            
            
            
        }
        
    }
    if(count == ruleData.content.length){
        // 正则验证通过
        return true ;
    }else{
        // 正则验证不通过
        return false ;
    }
}





/**
 * 删除localStorage
 */
export const removeseeStore = name => {
    if (!name) return;
    window.sessionStorage.removeItem(name);
}
/**
 * 存储sessionStorage
 */
export const setSessiontorage = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(name, content);
}
/**
 * 获取sessionStorage
 */
export const getSessiontorage= name => {
    if (!name) return;
    return window.sessionStorage.getItem(name);
}
/**
 * 存储localStorage
 */
export const setStorage = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStorage = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
    let target;
    // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if (attr === 'scrollTop') {
        target = element.scrollTop;
    } else if (element.currentStyle) {
        target = element.currentStyle[attr];
    } else {
        target = document.defaultView.getComputedStyle(element, null)[attr];
    }
    //在获取 opactiy 时需要获取小数 parseFloat
    return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}
