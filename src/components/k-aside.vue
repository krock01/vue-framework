<template>
  <el-aside :width="width">
    <slot></slot>
  </el-aside>
</template>

<script>
import { Aside } from 'element-ui';
export default {
  name: 'KAside',
  components: {
    'el-aside': Aside
  },
  props: {
    width: {
      type: String,
      default: '300px'
    }
  }

};
</script>
