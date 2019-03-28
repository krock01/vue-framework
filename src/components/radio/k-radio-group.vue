<template>
  <el-radio-group
   v-model="model"
  :value="value"
  :size="size"
  :disabled="disabled"
  :textColor="textColor"
  :fill="fill"
  @change="handleChange($event)"
 >
    <slot></slot>
  </el-radio-group>
</template>

<script>
import { RadioGroup } from 'element-ui';

export default {
  name: 'KRadioGroup',
  components: {
    'el-radio-group': RadioGroup
  },
  props: {
    value: {},
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
