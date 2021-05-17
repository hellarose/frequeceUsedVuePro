import allComponents from '@/components/global/index.js';

function install(Vue){
    // 全局指令 过滤器
    // 全局组件
    for(let comIndex=0;comIndex<allComponents;comIndex++){
        Vue.component(allComponents[comIndex].name,allComponents[comIndex])
    }
    // 全局参数 方法
    
    // 全局UI套间引用
}

export default install;