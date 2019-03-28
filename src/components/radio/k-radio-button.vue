<template>
  <el-radio-button
  :label="label"
  :disabled="disabled"
  :name="name">
    <slot></slot>
  </el-radio-button>
</template>

<script>
import { RadioButton } from 'element-ui';

export default {
  name: 'KRadioButton',
  components: {
    'el-radio-button': RadioButton
  },
  props: {
    label: {},
    disabled: Boolean,
    name: String
  }
};
</script>
