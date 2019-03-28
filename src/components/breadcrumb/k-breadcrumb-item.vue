<template>
  <el-breadcrumb-item
  :to="to"
  :replace="replace"
  >
    <slot></slot>
  </el-breadcrumb-item>
</template>
<script>
import { BreadcrumbItem } from 'element-ui';
export default {
  name: 'KBreadcrumbItem',
  components: {
    'el-breadcrumb-item': BreadcrumbItem
  },
  props: {
    to: {},
    replace: Boolean
  }
};
</script>
