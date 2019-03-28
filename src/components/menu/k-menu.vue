<template>
  <el-menu
  ref="menu"
  :mode="mode"
  :collapse="collapse"
  :background-color="backgroundColor"
  :text-color="textColor"
  :active-text-color="activeTextColor"
  :default-active="defaultActive"
  :default-openeds="defaultOpeneds"
  :unique-opened="uniqueOpened"
  :menu-trigger="menuTrigger"
  :router="router"
  :collapse-transition="collapseTransition"
  @select="handleSelect($event)"
  @open="handleOpen($event)"
  @close="handleClose($event)"
  >
  <slot></slot>
  </el-menu>
</template>
<script>
import { Menu } from 'element-ui';
export default {
  name: 'KMenu',
  components: {
    'el-menu': Menu
  },
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    defaultActive: {
      type: String,
      default: ''
    },
    defaultOpeneds: Array,
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: {
      type: String,
      default: 'hover'
    },
    collapse: Boolean,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    collapseTransition: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    open () {
      this.$refs.menu.open();
    },
    close () {
      this.$refs.menu.close();
    },
    handleSelect (val) {
      this.$emit('select', val);
    },
    handleOpen (val) {
      this.$emit('open', val);
    },
    handleClose (val) {
      this.$emit('close', val);
    }
  }
};
</script>
