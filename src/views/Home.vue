<template>
  <div class="home">
    {{ hw }}
  </div>
</template>

<script>
import {haveTest} from '@/api/test'
export default {
  name: 'Home',
  data(){return {
    hw:'Hello Mater'
  }},
  created(){
    haveTest().then(res=>{
      console.log(res)
    })
  },
}
</script>
