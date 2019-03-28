<template>
  <el-main>
    <slot></slot>
  </el-main>
</template>

<script>
import { Main } from 'element-ui';
export default {
  name: 'KMain',
  components: {
    'el-main': Main
  }

};
</script>
