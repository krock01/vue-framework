<template>
  <el-autocomplete
  ref="autocomplete"
  :valueKey="valueKey"
  :popperClass="popperClass"
  :popperOptions="popperOptions"
  :placeholder="placeholder"
  :clearable="clearable"
  :disabled="disabled"
  :name="name"
  :size="size"
  :value="value"
  :maxlength="maxlength"
  :minlength="maxlength"
  :autofocus="autofocus"
  :fetchSuggestions="fetchSuggestions"
  :triggerOnFocus="triggerOnFocus"
  :customItem="customItem"
  :selectWhenUnmatched="selectWhenUnmatched"
  :prefixIcon="prefixIcon"
  :suffixIcon="suffixIcon"
  :label="label"
  :debounce="debounce"
  :placement="placement"
  :hideLoading="hideLoading"
  :popperAppendToBod="popperAppendToBody"
  @change="handleChange($event)"
  @focus="handleFocus($event)"
  @clear="handleClear($event)"
  @select="handleSelect($event)">
    <slot name="suffix" slot="suffix"></slot>
    <slot name="prefix" slot="prefix"></slot>
    <slot name="prepend" slot="prepend"></slot>
    <slot name="append" slot="append"></slot>
  </el-autocomplete>
</template>
<script>
import { Autocomplete } from 'element-ui';
export default {
  name: 'KAutocomplete',
  components: {
    'el-autocomplete': Autocomplete
  },
  props: {
    valueKey: {
      type: String,
      default: 'value'
    },
    popperClass: String,
    popperOptions: Object,
    placeholder: String,
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    name: String,
    size: String,
    value: String,
    maxlength: Number,
    minlength: Number,
    autofocus: Boolean,
    fetchSuggestions: Function,
    triggerOnFocus: {
      type: Boolean,
      default: true
    },
    customItem: String,
    selectWhenUnmatched: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String,
    label: String,
    debounce: {
      type: Number,
      default: 300
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    hideLoading: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    focus () {
      this.$refs.autocomplete.focus();
    },
    handleSelect (val) {
      this.$emit('select', val);
    },
    handleChange (val) {
      this.$emit('change', val);
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
