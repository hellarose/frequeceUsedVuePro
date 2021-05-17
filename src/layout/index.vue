
<style scoped lang='scss'>

</style>


<template>
    <div>
        <div v-if="style==backMng">
            
        </div>   
        <div v-if="style==officialNet"></div>
        <div v-if="style==diy"></div>
    </div>
</template>


<script>
import backManager from ''
export default {
    data() {
        return {
            style:'backMng', // backMng 后台管理系统 | officialNet 官网 | diy 其他
        };
    },
    created(){

    },
    mounted(){

    },
    //props:{},//[]
    methods:{

    },
    computed:{

    },
    watch:{

    },
    filters:{

    },
    directives:{

    },
    components:{

    },
};
</script>