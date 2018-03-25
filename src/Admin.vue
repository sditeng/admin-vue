<template>
	<div id="admin">
		<el-container>
			<el-row class="container">
				<el-col :span="24" class="header"  v-if="menus">
					<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
						{{collapsed?'':sysName}}
					</el-col>
					<el-col :span="10">
						<div class="tools" @click.prevent="collapse">
							<i class="fa fa-align-justify"></i>
						</div>
					</el-col>
					<el-col :span="4" class="userinfo">
						<el-dropdown trigger="hover">
							<span class="el-dropdown-link userinfo-inner">asd
								<!-- <img :src="user.headimg" /> {{user.username}} -->
							</span>
							<el-dropdown-menu slot="dropdown" @command="onDropdownCommand">
								<el-dropdown-item>我的消息</el-dropdown-item>
								<el-dropdown-item>设置</el-dropdown-item>
								<el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
				</el-col>
				<el-col :span="24" class="main">
					<aside :class="collapsed?'menu-collapsed':'menu-expanded'" v-if="menus">
						<!-- 导航菜单 -->
						<el-menu
						:default-active="$route.path"
						class="el-menu-vertical-demo"
						@open="handleopen"
						@close="handleclose"
						@select="handleselect"
						unique-opened router
						:collapse="collapsed"
						background-color="#222d32"
						text-color="#fff"
						active-text-color="#ffd04b"
						>
							<el-submenu :index="index"　v-for="mm,index in menus" :key="index">
								<template slot="title"><i :class="mm.icon" aria-hidden="true"></i>&nbsp; <span slot="title">{{mm.title}}</span></template>
								<el-menu-item :index="m.path" :route="m" v-for="m,i in mm.item" :key="i"><span slot="title">{{m.title}}</span></el-menu-item>
							</el-submenu>
						</el-menu>
					</aside>

					<section class="content-container">
						<div class="grid-content bg-purple-light">
							<!-- <el-col :span="24" class="breadcrumb-container" v-if="menus">
								<strong class="title">{{$route.name}}</strong>
								<el-breadcrumb separator="/" class="breadcrumb-inner">
									<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
										{{ item.name }}
									</el-breadcrumb-item>
								</el-breadcrumb>
							</el-col> -->
							<el-col :span="24" class="content-wrapper">
								<transition name="fade" mode="out-in">
									<router-view></router-view>
								</transition>
								<el-footer>
							    <!-- <div class="pull-right hidden-xs">
							      <b>Version</b> 2.3.7
							    </div>
							    <strong>Copyright © 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
							    reserved. -->
								</el-footer>
							</el-col>
						</div>
					</section>

				</el-col>
			</el-row>
		</el-container>


	</div>
</template>
<script>
var rolemenu = {
  'admin': [
    {
      title: '网站信息',
      index: '1',
      icon: 'fa fa-home fa-lg',
      item: [
        {title: '仪表盘', path: '/'},
      ]
    }, {
      title: '信息管理',
      index: '２',
      icon: 'fa fa-archive fa-lg',
      item: [
        {title: '文章管理', path: '/admin/article'},
        {title: '单页管理', path: '/admin/page'},
        {title: '附件列表', path: '/admin/attachment'}
      ]
    }, {
      title: '前台设置',
      index: '３',
      icon: 'fa fa-envelope fa-lg',
      item: [
        {title: '幻灯片设置', path: '/admin/slider'},
        {title: '友情连接', path: '/admin/link'}
      ]
    }, {
      title: '用户管理',
      index: '５',
      icon: 'fa fa-users fa-lg',
      item: [
        {title: '用户列表', path: '/admin/user'},
        {title: '用户权限', path: '/admin/role'}
      ]
    },
  ],
}

export default {
  name: 'admin',
  data () {
    return {
      sysName: '后台管理',
      collapsed: false,
      width: {width: '240px'},
      menus: rolemenu['admin'],
    }
  },
	create() {
		this.menus = rolemenu['admin']
	},
  methods: {
    handleopen () {
      console.log('handleopen')
    },
    handleclose () {
      console.log('handleclose')
    },
    handleselect: function (a, b) {
      console.log('menu:', a, b)
    },
    collapse: function () {
      this.collapsed = !this.collapsed
    },
    showMenu (i, status) {
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none'
    },
		onDropdownCommand (cmd) {
			if (cmd === 'logout') {
				this.$store.dispatch('logout')
			}
		},
		logout: function () {
			this.$store.dispatch('logout')
		}
  }
}
</script>
<style lang="css">
	.el-footer {
		background: #fff;
		padding: 15px;
		color: #444;
		border-top: 1px solid #d2d6de;
	}
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
	.header{
		height: 60px;
		line-height: 60px;
		background: #3c8dbc;
		color:#fff;
	}
	.userinfo{
		text-align: right;
		padding-right: 35px;
		float: right;
	}
	.userinfo-inner {
		cursor: pointer;
		color:#fff;
	}
	.userinfo-inner img {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		margin: 10px 0px 10px 10px;
		float: right;
	}
	.logo {
		height:60px;
		font-size: 22px;
		padding-left:20px;
		padding-right:20px;
		border-color: rgba(238,241,146,0.3);
		border-right-width: 1px;
		border-right-style: solid;
	}
	.logo img {
		width: 40px;
		float: left;
		margin: 10px 10px 10px 18px;
	}
	.txt {
		color:#fff;
	}
	.logo-width{
		width:230px;
	}
	.logo-collapse-width{
		width:60px
	}
	.tools{
		padding: 0px 23px;
		width:14px;
		height: 60px;
		line-height: 60px;
		cursor: pointer;
	}
	.main {
		display: flex;
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;
	}
	.main aside {
		flex:0 0 230px;
		width: 230px;
	}
	.el-menu{
		height: 100%;
		background-color: #222d32;
	}
	/*
	.el-submenu__title {
    color: #fff;
	}
	.el-menu-item{
		color: #fff;
	} */
	.collapsed{
		width:60px;
	}
	.item{
		position: relative;
	}
	.submenu{
		position:absolute;
		top:0px;
		left:60px;
		z-index:99999;
		height:auto;
		display:none;
	}
	.menu-collapsed{
		flex:0 0 60px;
		width: 60px;
	}
	.menu-expanded{
		flex:0 0 230px;
		width: 230px;
	}
	.content-container {
		flex:1;
		overflow-y: scroll;
		padding: 20px;
	}
	.content-wrapper {
		background-color: #fff;
		box-sizing: border-box;
	}
	.title {
		width: 200px;
		float: left;
		color: #475669;
	}
	.breadcrumb-inner {
		float: right;
	}

</style>
