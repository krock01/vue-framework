<template>
  <el-checkbox
  v-model="model"
  :value="value"
  :label="label"
  :indeterminate="indeterminate"
  :trueLabel="trueLabel"
  :falseLabel="falseLabel"
  :disabled="disabled"
  :name="name"
  :border="border"
  :size="size"
  :checked="checked"
  @change="handleChange($event)">
    <slot></slot>
  </el-checkbox>
</template>

<script>
import { Checkbox } from 'element-ui';

export default {
  name: 'KCheckbox',
  components: {
    'el-checkbox': Checkbox
  },
  props: {
    value: {},
    label: {},
    indeterminate: Boolean,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    disabled: Boolean,
    checked: Boolean,
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
