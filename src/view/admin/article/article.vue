<template>
  <div id="article">
    <el-col :span="24" class="breadcrumb-container">
      <h1><strong class="title">文章管理</strong></h1>
      <el-breadcrumb separator="/" class="breadcrumb-inner">
        <el-breadcrumb-item>
          文章管理
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <div style="padding-top:60px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{name: 'Dashboard' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{name: 'Article'}">文章管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    
  </div>
</template>
<script>
export default{
  name: 'article',
  data () {
    return {

    }
  },
}
</script>
<style media="screen">

</style>
