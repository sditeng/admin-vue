<template>
  <div id="login">

    <el-form :model="login" status-icon ref="login" label-width="100px" class="login-box-body">
      <div class="login-logo">
        <h3>登录后台</h3>
      </div>
      <el-form-item
        label="用户名"
        prop="username"
        :rules="[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          ]"
       >
        <el-input type="text" v-model="login.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[
          { required: true, message: '请输入密码', trigger: 'blur' },
          ]"
      >
        <el-input type="password" v-model="login.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit(login)">提交</el-button>
        <el-button @click="resetForm('login')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {post} from "../../router/admin"
import {Message} from 'element-ui'
export default{
  name: 'login',
  data () {
    return {
      login: {username: '',password: ''},
    }
  },
  watch:{
		userInfo:function() {
			var user = this.userInfo;
      if(user.status===1) {
        this.$notify({
          title: '失败',
          message: user.info,
          type: 'error'
        });
      }
		}
	},
	computed:{
		...mapGetters({
			userInfo: "getUser"
		})
	},
  methods:{
    submit(s){
      this.$store.dispatch('login', {
        username: s.username,
        password: s.password,
        errorcb: function (e) {
          Message.error('登录异常！' + e.msg)
        }
      })
    },
    resetForm(s) {
      this.$refs[s].resetFields();
    }
  }
}
</script>
<style media="screen">
  #login{
    width: 360px;
    margin: 7% auto;
    background: #d2d6de;
  }
  #login .login-logo{
    font-size: 35px;
    text-align: center;
    margin-bottom: 25px;
    font-weight: 300;
  }
  #login .login-box-body, .register-box-body {
    background: #fff;
    padding: 20px;
    border-top: 0;
    color: #666;
  }
  #login .el-input__inner {
    border-radius: 0;
    box-shadow: none;
    border-color: #d2d6de;
  }
</style>
