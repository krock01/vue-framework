<template>
  <el-container :direction="direction">
    <slot></slot>
  </el-container>
</template>

<script>
import { Container } from 'element-ui';
export default {
  name: 'KContainer',
  components: {
    'el-container': Container
  },
  props: {
    direction: String
  }

};
</script>
