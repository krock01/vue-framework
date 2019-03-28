<template>
  <el-button-group>
    <slot></slot>
  </el-button-group>
</template>

<script>
import { ButtonGroup } from 'element-ui';
export default {
  name: 'KButtonGroup',
  components: {
    'el-button-group': ButtonGroup
  }
};
</script>
