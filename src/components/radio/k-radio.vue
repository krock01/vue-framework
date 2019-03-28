<template>
  <el-radio
  v-model="model"
  :value="value"
  :label="label"
  :disabled="disabled"
  :name="name"
  :border="border"
  :size="size"
  @change="handleChange($event)">
    <slot></slot>
  </el-radio>
</template>

<script>
import { Radio } from 'element-ui';

export default {
  name: 'KRadio',
  components: {
    'el-radio': Radio
  },
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
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
  methods: {
    handleChange (val) {
      this.$emit('change', val);
    }
  }
};
</script>
