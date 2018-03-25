<template>
  <div id="dashboard">
    <el-col :span="24" class="breadcrumb-container">
      <h1><strong class="title">仪表盘</strong></h1>
      <el-breadcrumb separator="/" class="breadcrumb-inner">
        <el-breadcrumb-item>
          仪表盘
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <div style="padding-top:60px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div style="padding-top:15px;">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="small-box bg-aqua">
          <div class="inner">
            <h3>150</h3>
            <p>文章</p>
          </div>
          <div class="icon">
            <i class="fa fa-bookmark-o"></i>
          </div>
          <a href="#" class="small-box-footer">
            文章列表 <i class="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="small-box bg-green">
          <div class="inner">
            <h3>150</h3>
            <p>页面</p>
          </div>
          <div class="icon">
            <i class="fa  fa-file-word-o"></i>
          </div>
          <a href="#" class="small-box-footer">
            页面列表 <i class="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="small-box bg-yellow">
          <div class="inner">
            <h3>150</h3>
            <p>用户</p>
          </div>
          <div class="icon">
            <i class="fa  fa-users"></i>
          </div>
          <a href="#" class="small-box-footer">
            用户列表 <i class="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="small-box bg-red">
          <div class="inner">
            <h3>90</h3>
            <p>访问量</p>
          </div>
          <div class="icon">
            <i class="fa fa-heart"></i>
          </div>
          <a href="#" class="small-box-footer">
            列表 <i class="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card box-primary">
          <div slot="header" class="clearfix">
            <span>更新列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">x</el-button>
          </div>
          <div class="text item">
            列表内容
          </div>
          <div class="text item">
            列表内容
          </div>
          <div class="text item">
            列表内容
          </div>
          <div class="text item">
            列表内容
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card box-primary">
          <div slot="header" class="clearfix">
            <span>备忘事项</span>
            <el-button style="float: right; padding: 3px 0" type="text">x</el-button>
          </div>
          <div class="text item">
            列表内容
          </div>
          <div class="text item">
            列表内容
          </div>
          <div class="text item">
            列表内容
          </div>
          <div class="text item">
            列表内容
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  </div>
</template>
<script>
export default{
  name: "dashboard"
}
</script>
<style lang="css">

</style>
