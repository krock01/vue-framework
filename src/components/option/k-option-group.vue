<template>
  <el-option-group
  :disabled="disabled"
  :label="label"
  >
  <slot></slot>
  </el-option-group>
</template>

<script>
import { OptionGroup } from 'element-ui';
export default {
  name: 'KOptionGroup',
  components: {
    'el-option-group': OptionGroup
  },
  props: {
    label: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
