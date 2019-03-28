<template>
  <el-input
  ref="input"
  :value="value"
  v-model="model"
  :size="size"
  :resize="resize"
  :form="form"
  :disabled="disabled"
  :readonly="readonly"
  :type="type"
  :autosize="autosize"
  :autocomplete="autocomplete"
  :validateEvent="validateEvent"
  :suffixIcon="suffixIcon"
  :prefixIcon="prefixIcon"
  :label="label"
  :clearable="clearable"
  :tabindex="tabindex"
  v-bind="$attrs"
  @change="handleChange($event)"
  @blur="handleBlur($event)"
  @focus="handleFocus($event)"
  @clear="handleClear($event)"
  >
  <slot name="suffix" slot="suffix"></slot>
  <slot name="prefix" slot="prefix"></slot>
  <slot name="prepend" slot="prepend"></slot>
  <slot name="append" slot="append"></slot>
  </el-input>
</template>

<script>
import { Input } from 'element-ui';
export default {
  name: 'KInput',
  components: {
    'el-input': Input
  },
  computed: {
    model: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      }
    }
  },
  props: {
    value: [String, Number],
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    },
    tabindex: String
  },
  methods: {
    focus () {
      this.$refs.input.focus();
    },
    blur () {
      this.$refs.input.blur();
    },
    select () {
      this.$refs.input.select();
    },
    handleChange (val) {
      this.$emit('change', val);
    },
    handleBlur (val) {
      this.$emit('blur', val);
    },
    handleFocus (val) {
      this.$emit('focus', val);
    },
    handleClear (val) {
      this.$emit('clear', val);
    }
  }
};
</script>
