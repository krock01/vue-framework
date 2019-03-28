<template>
  <k-main class="main">
    <k-tabs v-model="activeName" :closable="true" @tab-click="handleClick" type="card" @tab-remove="closeTab">
      <k-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name" @contextmenu.prevent.native="openMenu($event)"></k-tab-pane>
    </k-tabs>
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </k-main>
</template>
<script>
import KMain from '@/components/k-main';
import KTabs from '@/components/tab/k-tabs';
import KTabPane from '@/components/tab/k-tab-pane';
export default {
  name: 'LMain',
  components: {
    KMain,
    KTabs,
    KTabPane
  },
  computed: {
    cachedViews () {
      // 获取缓存的可缓存的路由列表
      return this.$store.state.tabsView.cachedViews;
    },
    key () {
      // 定义多个routeview的key
      return this.$route.fullPath;
    }
  },
  data () {
    return {
      // 当前选中的tab
      activeName: '',
      // 页签列表
      tabs: [],
      // 页签列表缓存
      tabCache: []
    };
  },
  watch: {
    $route () {
      const { name } = this.$route;
      const { label } = this.$route.meta;
      const tab = { label: label, name: name };
      console.log(tab);
      this.activeName = name;
      // 路由监听，有新的链接就加入到tab中
      if (!this.tabCache.includes(name)) {
        this.tabs.push(tab);
        this.tabCache.push(name);
      }
    }
  },
  methods: {
    /**
     * 点击tab触发路由
     */
    handleClick (val) {
      this.$router.push(val.name);
    },
    /**
     * 打开邮件菜单
     */
    openMenu (e) {
      console.log(e);
    },
    /**
     * 关闭tab
     */
    closeTab (currentName) {
      let index = this.tabCache.indexOf(currentName);
      if (index !== 0) {
        this.tabs.splice(index, 1);
        const tabsLen = this.tabs.length;
        if (index < tabsLen) {
          this.activeName = this.tabs[index].name;
        } else {
          this.activeName = this.tabs[tabsLen - 1].name;
        }
        // 清理缓存
        this.tabCache = this.tabs.map(val => {
          return val.name;
        });
        // 删除cacheviews中对应的缓存
        this.$store.dispatch('delView', currentName);
        this.$router.push(this.activeName);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.main{
  min-height: calc(100vh - 128px);
  width: 100%;
  padding-top:5px;
}
</style>
