<template>
  <el-option
  :disabled="disabled"
  :value="value"
  :label="label"
  >
  </el-option>
</template>

<script>
import { Option } from 'element-ui';
export default {
  name: 'KOption',
  components: {
    'el-option': Option
  },
  props: {
    value: {
      required: true
    },
    label: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
