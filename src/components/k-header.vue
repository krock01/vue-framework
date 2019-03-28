<template>
  <el-header :height="height">
    <slot></slot>
  </el-header>
</template>

<script>
import { Header } from 'element-ui';
export default {
  name: 'KHeader',
  components: {
    'el-header': Header
  },
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }

};
</script>
