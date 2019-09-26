<template>
 <div class="page">
   <div class="page-content">
     <div class="category">
      <a href="">分类导航模块</a>
     </div>
     <div class="content-box-list">
       <div class="content-box-item">
         <h1>文章列表模块</h1>
       </div>
     </div>
   </div>
   <div class="page-models">
     <div class="login-models">
      登录模块
     </div>
     <div class="ad-models">

       广告模块
       <a href="javascript:;">
         <!-- <img src="~@/assets/ad.jpg" alt=""> -->
       </a>
     </div>
     <div class="hot-tags-models">
       热门标签模块
     </div>
     <div class="download-models">
       下载模块
     </div>
     <div class="imgText-list">
       图文列表模块
     </div>

     <div class="about-us">
       关于我们模块
     </div>
   </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang="less" scope>
@line: #f1f1f1;
.page{
  display: flex;
  .page-content{
    flex: 1;
    background-color: #fff;
    transition: all 0.4s;
    .category{
      background-color: bisque;
      line-height: 46px;
      padding-left: 20px;
      border-bottom: 1px solid @line;
    }
    .content-box-item{
      height: 76px;
      padding: 20px;
      background-color: palegreen;
    }
  }
  .page-models{
    max-width: 240px;
    width: 240px;
    margin-left: 20px;
    .login-models{
      background-color: #fff;
      margin-bottom: 16px;
      padding: 16px;
      height: 260px;
    }
    .ad-models{
      height: 200px;
      overflow: hidden;
      margin-bottom: 16px;
      background-color: #fff;
    }
    .hot-tags-models{
      height: 244px;
      background-color: #fff;
      margin-bottom: 16px;
    }
    .download-models{
      height: 82px;
      background-color: #fff;
      margin-bottom: 16px;
    }
    .imgText-list{
      height: 300px;
      background-color: #fff;
      margin-bottom: 16px;
    }
    .about-us{
      height: 200px;
      background-color: #fff;
    }
  }
}

@media screen and (max-width: 980px){
  .page-models{
    display: none;
  }
}
 
</style>
