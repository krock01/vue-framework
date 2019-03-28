<template>
  <el-form
  ref="form"
  :model="model"
  :rules="rules"
  :inline="inline"
  :label-position="label-position"
  :label-widt="label-width"
  :label-suffix="labelSuffix"
  :hide-required-asterisk="hideRequiredAsterisk"
  :show-message="showMessage"
  :inline-message="inline-message"
  :status-icon="status-icon"
  :validate-on-rule-change="validateOnRuleChange"
  :size="size"
  :disabled="disabled"
  @validate="handleValidate($event)"
  >
  <slot></slot>
  </el-form>
</template>
<script>
import { Form } from 'element-ui';
export default {
  name: 'KForm',
  components: {
    'el-form': Form
  },
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleValidate (event) {
      this.$emit('validate', event);
    },
    validate (callback) {
      this.$refs.form.validate(callback);
    },
    resetFields () {
      this.$refs.form.resetFields();
    },
    clearValidate (props) {
      this.$refs.clearValidate(props);
    },
    validateField (props) {
      this.$refs.validateField(props);
    }
  }
};
</script>
