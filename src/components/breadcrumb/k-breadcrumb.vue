<template>
  <el-breadcrumb
  :separator="separator"
  :separator-class="separatorClass"
  >
  <slot></slot>
  </el-breadcrumb>
</template>
<script>
import { Breadcrumb } from 'element-ui';
export default {
  name: 'KBreadcrumb',
  components: {
    'el-breadcrumb': Breadcrumb
  },
  props: {
    separator: String,
    separatorClass: String
  }
};
</script>
