<template>
  <el-dropdown-menu
  :visible-arrow="visibleArrow"
  :arrow-offset="arrowOffset"
  >
  <slot></slot>
  </el-dropdown-menu>
</template>
<script>
import { DropdownMenu } from 'element-ui';
// 该组件不能正常工作
export default {
  name: 'KDropdownMenu',
  components: {
    'el-dropdown-menu': DropdownMenu
  },
  props: {
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    }
  }
};
</script>
