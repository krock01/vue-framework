<template>
  <el-checkbox-group
   v-model="model"
  :value="value"
  :size="size"
  :disabled="disabled"
  :textColor="textColor"
  :fill="fill"
  :min="min"
  :max="max"
  @change="handleChange($event)"
 >
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
import { CheckboxGroup } from 'element-ui';

export default {
  name: 'KCheckboxGroup',
  components: {
    'el-checkbox-group': CheckboxGroup
  },
  props: {
    value: {},
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String,
    disabled: Boolean
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
