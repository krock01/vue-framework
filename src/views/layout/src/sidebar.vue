<template>
  <k-aside class="sidebar">
    <template>
      <div>
        <h3 style="padding-left:20px;color:white">管理系统</h3>
      </div>
    </template>
    <k-menu
      :default-active="selectedIndex+''"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :router="true">
      <k-menu-item v-for="(menu,index) in menus" :key="index" :index="menu.url">
        <i class="el-icon-menu"></i>
        <span slot="title">{{menu.name}}</span>
      </k-menu-item>
    </k-menu>
  </k-aside>
</template>
<script>
import KAside from '@/components/k-aside';
import KMenu from '@/components/menu/k-menu';
import KMenuItem from '@/components/menu/k-menu-item';

export default {
  name: 'Sidebar',
  components: {
    KAside,
    KMenu,
    KMenuItem
  },
  data () {
    return {
      menus: [
        { name: '首页', url: 'home' },
        { name: '用户管理', url: 'user' },
        { name: '菜单管理', url: 'menu' }
      ],
      selectedIndex: 'home'
    };
  },
  methods: {
    routerToLink (url) {
      this.$router.push(url);
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar{
  height: 100vh;
  width: 200px !important;
  background-color: #304156;
  overflow-x: hidden;
  overflow-y: auto;
  .el-menu{
    border: 0;
  }
  .nest-menu .el-submenu>.el-submenu__title,
  .el-submenu .el-menu-item {
    min-width: 200px !important;
    background-color: #1f2d3d !important;
    &:hover {
      background-color: #001528 !important;
    }
  }
}
</style>
