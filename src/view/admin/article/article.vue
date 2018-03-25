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

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>文章列表</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="text item">
        <el-table
        :data="tableData5"
        style="width: 100%"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="编号 ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="文章标题"
            prop="name">
          </el-table-column>
          <el-table-column
            label="作者"
            prop="name">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="props">
              <el-button type="primary" plain> <i class="fa fa-edit"></i>编辑</el-button>
              <el-button type="danger" plain> <i class="fa fa-trash"></i>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

  </div>
</template>
<script>
import {get,post} from '../../../store/api'
export default{
  data () {
    return {
      tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
    }
  },
  created(){
    this.getArticle();
  },
  methods:{
    getArticle(){
      get('/admin/article/list').then(data=>{
        console.log(data);
      })
    }
  }
}
</script>
<style media="screen">
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .box-card{
    margin-top: 15px;
  }
</style>
