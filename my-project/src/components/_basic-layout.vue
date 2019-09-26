<template>
 <div>
     <bs-header/>
     <router-view class="page"></router-view>
 </div>
</template>

<script>
import header from './_basic-layout-header'

 export default {
   name:'bs-layout',
   data () {
     return {

     }
   },
   components: {
       'bs-header':header
   }
 }
</script>

<style>
html{
  background: #eee;
}
.page{
  max-width: 960px;
  margin: 0 auto;
}
</style>
