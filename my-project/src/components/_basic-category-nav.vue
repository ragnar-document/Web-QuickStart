<template>
 <div class="category-cp">
     <!-- <ul class="category-body">
         <router-link to="javascript:;" v-for="item in category" :key="item.name">{{item.name}}</router-link>
     </ul> -->
     <ul class="category-body">
         <router-link to="javascript:;">热门</router-link>
         <router-link to="javascript:;">最新</router-link>
         <router-link to="javascript:;">热榜</router-link>
     </ul>
 </div>
</template>

<script>
 export default {
   name:'bs-category-nav',
   props:{
       category :{
           type:Array,
           default:()=>[]
       }
   },
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
