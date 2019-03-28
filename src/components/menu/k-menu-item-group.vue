<template>
  <el-menu-item-group
  :title="title">
  <slot name="title" slot="title"></slot>
  <slot></slot>
  </el-menu-item-group>
</template>
<script>
import { MenuItemGroup } from 'element-ui';
export default {
  name: 'KMenuItemGroup',
  components: {
    'el-menu-item-group': MenuItemGroup
  },
  props: {
    title: {
      type: String
    }
  }
};
</script>
