<template>
	<div class="admin">
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
					<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
						 unique-opened router :collapse="collapsed">
						<el-submenu :index="mm.index"　v-for="mm in menus">
							<template slot="title"><i :class="mm.icon" aria-hidden="true"></i>&nbsp; <span slot="title">{{mm.title}}</span></template>
							<el-menu-item :index="m.path" :route="m" v-for="m in mm.item"><span slot="title">{{m.title}}</span></el-menu-item>
						</el-submenu>
					</el-menu>
				</aside>

				<section class="content-container">
					<div class="grid-content bg-purple-light">
						<el-col :span="24" class="breadcrumb-container" v-if="menus">
							<strong class="title">{{$route.name}}</strong>
							<el-breadcrumb separator="/" class="breadcrumb-inner">
								<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
									{{ item.name }}
								</el-breadcrumb-item>
							</el-breadcrumb>
						</el-col>
						<el-col :span="24" class="content-wrapper">
							<transition name="fade" mode="out-in">
								<router-view></router-view>
							</transition>
						</el-col>
					</div>
				</section>

			</el-col>
		</el-row>
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
        {title: '网站管理', path: '/'},
        {title: '栏目管理', path: '/admin/lists'},
        {title: '留言管理', path: '/'},
        {title: '订单管理', path: '/'}
      ]
    }, {
      title: '信息管理',
      index: '２',
      icon: 'fa fa-archive fa-lg',
      item: [
        {title: '导师列表', path: '/admin/teacher'},
        {title: '文章列表', path: '/admin/article'},
        {title: '单页列表', path: '/admin/page'},
        {title: '附件列表', path: '/admin/attachment'}
      ]
    }, {
      title: '前台设置',
      index: '３',
      icon: 'fa fa-envelope fa-lg',
      item: [
        {title: '幻灯片设置', path: '/admin/slider'},
        {title: '菜单设置', path: '/admin/lists'},
        {title: '底部设置', path: '/'},
        {title: '友情连接', path: '/admin/link'}
      ]
    }, {
      title: '微信管理',
      index: '４',
      icon: 'fa fa-weixin fa-lg',
      item: [
        {title: '人员列表', path: '/'},
        {title: '地点坐标列表', path: '/'},
        {title: '区域报价表', path: '/'},
        {title: '区域划分', path: '/'}
      ]
    }, {
      title: '用户管理',
      index: '５',
      icon: 'fa fa-users fa-lg',
      item: [
        {title: '用户列表', path: '/admin/users'},
        {title: '用户权限', path: '/'}
      ]
    }, {
      title: '其他',
      index: '',
      icon: 'fa fa-cog fa-lg',
      item: [
        {title: '人员列表', path: '/'},
        {title: '地点坐标列表', path: '/'},
        {title: '区域报价表', path: '/'},
        {title: '区域划分', path: '/'}
      ]
    }
  ],
  'staff': [
    {
      title: '订单管理',
      item: [
        {title: '订单列表', path: '/admin/mmcx/car/books'}
      ]
    }
  ]
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
<style scoped lang="scss">
	body {
		margin: 0px;
		padding: 0px;
		font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
		font-size: 14px;
		-webkit-font-smoothing: antialiased;
	}
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background: #3c8dbc;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				//width:230px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
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
		}
		.main {
			display: flex;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				.el-menu{
					height: 100%;
					background-color: #222d32;
				}
				.collapsed{
					width:60px;
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

				}
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
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
