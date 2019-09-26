<template>
  <div class="page-header">
    <div class="page-header-nav">
      <div class="header-navMain">
        <div class="header-navMain-logo">
          <img src="@/assets/logojj.svg" alt />
        </div>
        <!-- 头部一级导航 -->
        <div class="header-navMain-list">
          <router-link :to="{ name: 'Home' }">首页</router-link>
          <router-link :to="{ name: '/' }">沸点</router-link>
          <router-link :to="{ name: '/' }">话题</router-link>
          <router-link :to="{ name: '/' }">小册</router-link>
          <router-link :to="{ name: '/' }">活动</router-link>
        </div>
        <!-- @media screen 542px 列表导航 -->
        <el-menu
          :default-active="activeIndex"
          class="header-navMain-vertical-list"
          mode="horizontal"
        >
          <el-submenu index="1">
            <template slot="title">
              首页
            </template>
            <el-menu-item index="1-1">首页</el-menu-item>
            <el-menu-item index="1-2">沸点</el-menu-item>
            <el-menu-item index="1-3">小册</el-menu-item>
            <el-menu-item index="1-3">活动</el-menu-item>
          </el-submenu>
        </el-menu>
        <!-- 搜索框部分 -->
        <div class="header-selectInput">
          <el-input size="mini" placeholder="请输入内容">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>

        <!-- 登录模块 -->
        <div class="header-navMain-login">
          <a href="javascript:;">写文章</a>
          <a href="javascript:;">登录 · 注册</a>
        </div>
      </div>
      <!-- 二级路由部分 -->
      <div class="header-navChild">
        <ul class="header-navChild-list">
          <router-link to="/" class="active">推荐</router-link>
          <router-link to="/">后端</router-link>
          <router-link to="/">前端</router-link>
          <router-link to="/">Android</router-link>
          <router-link to="/">ios</router-link>
          <router-link to="/">人工智能</router-link>
          <router-link to="/">开发工具</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'bs-header',
  data() {
    return {
      activeIndex: "1"
    };
  },
  watch: {},
  methods: {
  },
  components: {}
};
</script>

<style lang="less" scope>
@blue: #007fff;
@line: #f1f1f1;
@fontglay: #909090;
@shadow: rgba(0, 0, 0, 0.05);
a {
  text-decoration: none;
}

.active {
  color: @blue !important;
}
.page-header {
  position: sticky;
  top: 0;
  margin-bottom: 10px;
  box-shadow: 0 1px 2px 0 @shadow;
  background-color: #fff;
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    background-color: @line;
    top: 60px;
    left: 0;
  }
  .page-header-nav {
    margin: 0 auto;
    max-width: 960px;
    .header-navMain {
      display: flex;
      align-items: center;
      height: 60px;
      transition: all 0.4s;
      .header-navMain-logo {
        margin-right: 2em;
      }
      .header-navMain-list {
        flex: 1;
        a {
          color: @fontglay;
          margin: 0 1em;
          &.router-link-exact-active {
            color: @blue;
          }
        }

        a:nth-child(4) {
          position: relative;
        }

        a:nth-child(4)::after {
          position: absolute;
          content: "";
          right: -35px;
          top: -10px;
          width: 34px;
          height: 26px;
          background: url("~@/assets/discount.gif") no-repeat;
          background-size: contain;
        }
      }
      .header-navMain-vertical-list {
        display: none;
        position: relative;
      }
      .header-selectInput {
        input {
          background-color: rgba(227, 231, 236, 0.2);
        }
      }
      .header-navMain-login {
        a:first-child {
          position: relative;
        }
        a:first-child::after {
          position: absolute;
          content: "";
          height: 80%;
          width: 1px;
          background-color: @line;
          right: -20px;
          top: 10%;
        }
        a {
          color: @blue;
          margin: 0 20px;
        }
      }
    }
    .header-navChild {
      .header-navChild-list {
        line-height: 46px;
        height: 46px;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        &::-webkit-scrollbar {
          width: 0 !important;
        }
        a {
          font-size: 14px;
          margin: 0 14px;
          color: @fontglay;

          &.router-link-exact-active {
            color: @blue;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 980px) {
  .header-navMain {
    justify-content: space-between;
    padding: 0 14px;
  }
  .header-navMain-list{
    display: none;
  }
}

@media screen and (max-width: 542px) {
  .header-navMain {
    justify-content: space-between;
    padding: 0 14px;
  }
  .page-header .page-header-nav .header-navMain .header-navMain-vertical-list {
    display: block;
  }

  .header-navMain-list,
  .header-navMain-login {
    display: none;
  }
}
</style>
