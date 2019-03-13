import Vue from 'vue'
import VueRouter from 'vue-router';
// 全局过滤手机号
Vue.filter('filterTelphone', (items, start,end) => {
    if (!items) return ''
    if (items.toString().length > end && end!='') {
        let str = '*'
        let items1 = items.toString().slice(0, start)
        items = items.toString().slice(end);
        items = items1 + str.repeat(end-start) + items;
        console.log(items)
        return items;
    } else {
        if (start) {
            let str = '*'
            let items1 = items.toString().slice(0, start);
            
            items = items1 + str.repeat(items.toString().length - start);
            return items
        }else{
            return items
        }
        
    }
})

// 全局过滤器截取几位小数
Vue.filter('filterToFixed', (items,index) => {
    if (!items) return ''
    if (isNaN(parseInt(items))) {
        return '-'
    }else{
        return items.toFixed(index)
    }
})

// 全局过滤器 阿拉伯数字转成 一、二、三。。。
Vue.filter('SectionToChinese',function(items){
    var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
        var chnUnitSection = ["","万","亿","万亿","亿亿"];
        var chnUnitChar = ["","十","百","千"];

        function SectionToChineseFN(section){
            var strIns = '', chnStr = '';
            var unitPos = 0;
            var zero = true;
            while(section > 0){
                var v = section % 10;
                if(v === 0){
                    if(!zero){
                        zero = true;
                        chnStr = chnNumChar[v] + chnStr;
                    }
                }else{
                    zero = false;
                    strIns = chnNumChar[v];
                    strIns += chnUnitChar[unitPos];
                    chnStr = strIns + chnStr;
                }
                unitPos++;
                section = Math.floor(section / 10);
            }
            return chnStr;
        }

        return SectionToChineseFN(items)
})
// 全局过滤器 阿拉伯数字的钱数转成大写钱数
Vue.filter('moneyToChinese',function(items){
    function OnInput (items) {
        var n = items;
        if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n))
           return ;
           var unit = "千百拾亿千百拾万千百拾元角分", str = "";
           n += "00";
           var p = n.indexOf('.');
           if (p >= 0)
           n = n.substring(0, p) + n.substr(p+1, 2);
           unit = unit.substr(unit.length - n.length);
           for (var i=0; i < n.length; i++)
           str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
           return   str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
    }
    return OnInput(items)
})