<template>
  <el-form-item
  ref="formItem"
  :label="label"
  :label-width="labelWidth"
  :prop="prop"
  :required="required"
  :rules="rules"
  :error="error"
  :show-message="showMessage"
  :inline-message="inlineMessage"
  :size="size"
  >
    <slot name="error" slot="error"></slot>
    <slot name="label" slot="label"></slot>
  </el-form-item>
</template>

<script>
import { FormItem } from 'element-ui';

export default {
  name: 'KFormItem',
  components: {
    'el-form-item': FormItem
  },
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  methods: {
    resetField () {
      this.$refs.formItem.resetField();
    },
    clearValidate () {
      this.$refs.formItem.clearValidate();
    }
  }
};
</script>
