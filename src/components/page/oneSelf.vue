<template>
    <div>
        <h2>测试文件标题</h2>
        <span @click="add">++++</span>
        <span>{{rwdid}}</span>
        <span @click="del">----</span>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { FileImageUpload } from "@/api";
export default {
    name: "oneSelf",
    data() {
        return {};
    },
    components: {},
    methods: {
        ...mapMutations({
            changeRwdid: "SET_LEFT_DATA"
        }),
        add() {
            let variable = this.rwdid + 1;
            this.changeRwdid(variable);
        },
        del() {
            let variable = this.rwdid - 1;
            this.changeRwdid(variable);
        }
    },
    computed: {
        ...mapGetters(["rwdid"])
    },
    created(){
        console.log(process.env.NODE_ENV)
    }
};
</script>
<style lang="scss" scoped>
div {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    span {
        display: inline-block;
        width: 100px;
        height: 50px;
        background: #000;
        color: #fff;
        text-align: center;
        line-height: 50px;
    }
}
</style>

