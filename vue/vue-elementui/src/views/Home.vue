<template>
  <div class="home">
    <el-container>
      <el-header>
        <h2>管理系统</h2>
        <div class="user-control">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{userName}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="setting">设置</el-dropdown-item>
              <el-dropdown-item command="changePsw">修改密码</el-dropdown-item>
              <el-dropdown-item command="goOut">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            router
            style="height: 100%"
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="home">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/user">金龙</el-menu-item>
                <el-menu-item index="/home/user2">祥祥</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ''
    }
  },
  created() {
    console.log(this.$route.params.userName);
    let userName = this.$route.params.userName
    this.userName = userName
  },
  methods: {
    handleCommand(command) {
      console.log(command);
      if (command == "goOut") {
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style scoped>
.is-vertical {
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>