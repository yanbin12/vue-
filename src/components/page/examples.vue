<template>
    <div>
        <input type="text" placeholder="" v-model="msg.number">
        <button @click="jia">{{msg.jia}}</button>
        <button @click="jian">{{msg.jian}}</button>



        <label> <input type="radio" name="aaa" id="" value="1" v-model="aaa.value1" @change="change()"></label>
        <label> <input type="radio" name="aaa" id="" value="1" v-model="aaa.value2" @change="change()"></label>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:{
                number:1,
                jia:"++++",
                jian:"-----"
            },
            aaa:{
                value1:1,
                value2:2

            }
        }
    },
    methods:{
        jia(){
            this.msg.number++
        },
        jian(){
            this.msg.number--
        },
        change(){
            console.log(this.aaa)
        }
    },
    watch:{
        msg:{
            handler(){
                if(this.msg.number>=3){
                    this.msg.jia='number>3了'
                }else{
                    this.msg.jia='++++'
                }
            },
            deep:true
        }
    }
}
</script>
<style>

</style>
