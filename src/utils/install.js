import allComponents from '@/components/global/index.js'; // 全局组件
import globalSetts from '@/zoneGlobal/index.js'; // 全局配置
import * as fums from './fum.js'; // 常用方法
function install(Vue){
    // 全局指令 过滤器
    // 全局组件
    for(let comIndex=0;comIndex<allComponents.length;comIndex++){
        Vue.component(allComponents[comIndex].name,allComponents[comIndex])
    }
    // 全局参数 方法
    for(let setKey in globalSetts){
        Vue.prototype[setKey]=globalSetts[setKey]
    }
    for(let fumName in fums){
        Vue.prototype[fumName]=fums[fumName]
    }
    // 全局UI套间引用
}

export default install;