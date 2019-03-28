<template>
  <el-time-picker
  ref="timepicker"
  v-model="model"
  :readonly="readonly"
  :disabled="disabled"
  :editable="editable"
  :clearable = "clearable"
  :size="size"
  :placeholder="placeholder"
  :start-placeholder="startPlaceholder"
  :end-placeholder="endPlaceholder"
  :is-range="isRange"
  :arrow-control="arrowControl"
  :align="align"
  :popper-class="popperClass"
  :picker-options="pickerOptions"
  :range-separator="rangeSeparator"
  :value-format="valueFormat"
  :default-value="defaultValue"
  :name="name"
  :prefix-icon="prefixIcon"
  :clear-icon="clearIcon"
  @change="handleChange($event)"
  @blur="handleBlur($event)"
  @focus="handleFocus($event)"
  ></el-time-picker>
</template>

<script>
import { TimePicker } from 'element-ui';
export default {
  name: 'KTimePicker',
  components: {
    'el-time-picker': TimePicker
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
    size: String,
    format: String,
    valueFormat: String,
    readonly: Boolean,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    prefixIcon: String,
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close'
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    popperClass: String,
    editable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    value: {},
    defaultValue: {},
    rangeSeparator: {
      default: '-'
    },
    pickerOptions: {},
    unlinkPanels: Boolean,
    validateEvent: {
      type: Boolean,
      default: true
    },
    isRange: Boolean,
    arrowControl: Boolean,
    name: String
  },
  methods: {
    focus () {
      this.$refs.timepicker.focus();
    },
    handleChange (val) {
      this.$emit('change', val);
    },
    handleBlur (val) {
      this.$emit('blur', val);
    },
    handleFocus (val) {
      this.$emit('focus', val);
    }
  }
};
</script>
