<template>
    <div>
        <el-button type="text" @click="dialogVisible = true">{{msg.btn || '在线预览'}}</el-button>
        <el-dialog
            :title="msg.btn || '在线预览'"
            :visible.sync="dialogVisible"
            width="80%"
             :fullscreen='true' :append-to-body="true" custom-class="modelHeight">
            <div class="height">
                <iframe v-if="pdfIsShow" :src="urlStr" frameborder="0" width="100%" height="100%"></iframe>
                <!-- <iframe v-if="!pdfIsShow" :src="urlStr" frameborder="0" width="100%" height="100%"></iframe> -->
                <img v-if="!pdfIsShow" :src="urlStr" alt="">
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:"preview-pdf",
    props:['msg'],
    data(){
        return{
            dialogVisible: false,
            urlStr:'',
            pdfIsShow:true
        }
    },
    mounted(){
        let urlArray = this.msg.url.split('.')
        for(let index in urlArray){
            if(index*1+1 != urlArray.length){
                this.urlStr += urlArray[index]+'.'
            }else{
                if(urlArray[index].toLowerCase() == 'img' || urlArray[index].toLowerCase() == 'png' || urlArray[index].toLowerCase() == 'bmp' || urlArray[index].toLowerCase() == 'jpeg'|| urlArray[index].toLowerCase() == 'jpg' || urlArray[index].toLowerCase() == 'gif' ){
                    this.pdfIsShow = false ;
                    this.urlStr += urlArray[index]
                }else if( urlArray[index].toLowerCase() == 'html'){
                    this.pdfIsShow = true ;
                    this.urlStr += urlArray[index]
                }else{
                    this.pdfIsShow = true ;
                    this.urlStr += 'pdf'
                }
            }
        }
    },
    methods:{
         
    },
    watch:{
        msg:{
            handler:function(){
                let urlArray = this.msg.url.split('.')
                for(let index in urlArray){
                    
                    if(index+1 != urlArray.length){
                        this.urlStr += urlArray[index]+'.'
                    }else{
                        if(urlArray[index].toLowerCase() == 'img' || urlArray[index].toLowerCase() == 'png' || urlArray[index].toLowerCase() == 'bmp' || urlArray[index].toLowerCase() == 'jpeg' || urlArray[index].toLowerCase() == 'jpg' || urlArray[index].toLowerCase() == 'gif'){
                            this.pdfIsShow = false ;
                            this.urlStr += urlArray[index]
                        }else{
                            this.pdfIsShow = true ;
                            this.urlStr += 'pdf'
                        }
                    }
                }
            },
            deep:true
        }
    }

}
</script>
<style>
.modelHeight .el-dialog__body{
    box-sizing: border-box;
    height:-moz-calc(100% - 60px) !important;
    height:-webkit-calc(100% - 60px) !important;
    height: calc(100% - 60px) !important;
}
.height{
    height:100%;
    width: 1366px;
    min-width: 1024px;
    margin:0 auto;
    position: relative;
}
.height img{
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto auto;
}
</style>
