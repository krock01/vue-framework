<template>
  <el-checkbox-button
  :label="label"
  :value="value"
  :disabled="disabled"
  :name="name"
  :checked="checked"
  :trueLabel="trueLabel"
  :falseLabel="falseLabel">
    <slot></slot>
  </el-checkbox-button>
</template>

<script>
import { CheckboxButton } from 'element-ui';

export default {
  name: 'KRadioButton',
  components: {
    'el-checkbox-button': CheckboxButton
  },
  props: {
    label: {},
    value: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number]
  }
};
</script>
