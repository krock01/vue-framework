<template>

  <el-input-number
    ref="input"
    v-model="model"
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :size="size"
    :max="max"
    :min="min"
    :name="name"
    :label="label"
    :step="step"
    :controls="controls"
    :controlsPosition="controlsPosition"
    :precision="precision"
    @blur="handleBlur"
    @focus="handleFocus"
    @change="handleChange"
  ></el-input-number>
</template>

<script>
import { InputNumber } from 'element-ui';
export default {
  name: 'KInputNumber',
  components: {
    'el-input-number': InputNumber
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
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {},
    disabled: Boolean,
    size: String,
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String,
      default: ''
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator (val) {
        return val >= 0 && val === parseInt(val, 10);
      }
    }
  },
  methods: {
    focus () {
      this.$refs.input.focus();
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
    }
  }
};
</script>
