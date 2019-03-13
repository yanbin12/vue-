<template>
    <div id="container">
        <input type="text"  v-model="rule.content" placeholder="请输入文字" @blur="validateOrderfn($event)">
        <preview-pdf :msg = msg></preview-pdf>
        <button @click="sublimt()">确定</button>
        <div v-scrollHeight="220">
            手机号 ： {{15241516151 | filterTelphone(4,8)}}<br>

            小写转大写：{{1111 | SectionToChinese}}<br>
            金钱转大写 ： {{1111.00 | moneyToChinese}}
        </div>
        <div style="width:210mm;height:297mm;line-height:30px;" id="tablePrint">
            <p class="clearfix"><span style="float:right;width:200px;">证书编号：1648a</span></p>
            <p class="clearfix"><span style="float:right;width:200px;margin-bottom:50px;">发证日期：2019-01-09</span></p>
            <ul>
                <li><span style="display:inline-block; width:120px;">《目录》序号：</span><span>XXXXXXXXXXXXXXXXX</span></li>
                <li><span style="display:inline-block; width:120px;">企业名称：</span><span>XXXXXXXXXXXXXXXXX</span></li>
                <li><span style="display:inline-block; width:120px;">企业名称代号：</span><span>XXXXXXXXXXXXXXXXX</span></li>
                <li><span style="display:inline-block; width:120px;">注册地址：</span><span>XXXXXXXXXXXXXXXXX</span></li>
                <li><span style="display:inline-block; width:120px;">生产地址：</span><span>XXXXXXXXXXXXXXXXX</span></li>
                <li><span style="display:inline-block; width:120px;">法人代表：</span><span>XXXXXXXXXXXXXXXXX</span></li>
                <li><span style="display:inline-block; width:120px;">生产类别：</span><span>XXXXXXXXXXXXXXXXX</span></li>
                <li><span style="display:inline-block; width:120px;">车辆品牌：</span><span>XXXXXXXXXXXXXXXXX</span></li>
                <li><span style="display:inline-block; width:120px;">证书有效期：</span><span>XXXXXXXXXXXXXXXXX</span></li>
            </ul>
        </div>
        <div @click="doPrint">打印</div>
    </div>
</template>
<script>
import {validateOrder , onlyChinese,onlyNumber} from '@common/mUtils'
import {  ruleData } from  "@common/regular"  
import { print } from '@common/print.js'
export default {
    data(){
        return {
            rule:{
                content:"",
                mustFill:false 
            },
            number:{
                content:"",
                mustFill:true 
            },
            str:"AAS，啊实打实，阿萨德，啊实打实",
            url:"http://172.16.21.122/resource/20190307/4718f088f2424b37a83e44ed8774e021.pdf"
            // url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551964130925&di=e34941a7f641c3a6d7a26ca3272f69b3&imgtype=0&src=http%3A%2F%2Fpic3.nipic.com%2F20090527%2F1242397_102231006_2.jpg"
            // url:"http://172.16.21.122/resource/20190311/9636d6580f5549cab1a5709e4b12abb6.html"
        }
    },
    mounted(){
        
        

        





        console.log(this.str.replace(/，/g,','))
        let shuzu = []
       if(this.str.indexOf(',') != -1 || this.str.indexOf('，') != -1){
           let strArray = this.str.split(',')
           for(let items of strArray){
               if(this.str.indexOf('，') == -1){
                   if(items != ''){
                       shuzu.push(items)
                   }
                   
               }else{
                   let aaaa = items.split('，')
                   for(let a of aaaa){
                       if(a != ''){
                            shuzu.push(a)
                        }
                       
                   }
               }
           }
       }
       console.log(shuzu)
    },
    computed:{
        msg:function(){
            return {url:this.url,btn:"",title:""}
        }
    },
    methods:{
        nonNumeric(){
            this.rule.content = onlyChinese(this.rule.content)
            
        },
        validateOrderfn(event){
            console.log(ruleData.admMatlmportMergingTemplates.proofRule.signer)
            if(!validateOrder(this.rule,ruleData.admMatlmportMergingTemplates.proofRule.signer)){
                event.srcElement.focus()
            }
        },
        sublimt(){
            if(validateOrder(this.rule,ruleData.admMatlmportMergingTemplates.proofRule.signer)){
                console.log({url:this.$route.path,jsonData:{rule:this.rule}})
                // saveData({url:this.$route.path,jsonData:JSON.stringify({rule:this.rule})})
            }
        },
        doPrint(){
            // this.$print(this.$refs.print)
            // setTimeout(function () {
            var browserType = this.myBrowser()
            let subOutputRankPrint = ''
            subOutputRankPrint = document.getElementById('tablePrint');
            if(browserType=='Firefox') {
                var windows = print(subOutputRankPrint.innerHTML);
                windows.close();
                window.location.reload()
              }else {
                if(browserType=='IE') {
                //   let img = document.getElementById('iestyle')
                //   img.style.marginTop = '7mm'
                  
                }
                
                let newContent = subOutputRankPrint.innerHTML
                let oldContent = document.body.innerHTML
                document.body.innerHTML = newContent
                window.print()
                this.isPrint = false
                window.location.reload(true)
                document.body.innerHTML = oldContent
              }
            // alert('换发并打印成功')
        }
        // ,500)
        // }
    }
}
</script>
<style scoped>
.PageNext{
    page-break-after: always
}
.clearfix{
    clear:both;

}
.clearfix:after{
    content:"\20";
    display: block;
    height:0;
    clear:both;

}
</style>
