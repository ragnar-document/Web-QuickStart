<template>
 <div>
     <bs-header></bs-header>
     <router-view></router-view>
 </div>
</template>

<script>
import header from "./_basic-layout-header";
 export default {
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

 
</style>
