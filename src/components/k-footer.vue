<template>
  <el-footer :height="height">
    <slot></slot>
  </el-footer>
</template>

<script>
import { Footer } from 'element-ui';
export default {
  name: 'KFooter',
  components: {
    'el-footer': Footer
  },
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }

};
</script>
