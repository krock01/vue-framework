<template>
  <el-badge
  v-model="model"
  :max="max"
  :is-dot="isDot"
  :hidden="hidden"
  :type="type"
  >
  <slot></slot>
  </el-badge>
</template>
<script>
import { Badge } from 'element-ui';
export default {
  name: 'KBadge',
  components: {
    'el-badge': Badge
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
    value: {},
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator (val) {
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;
      }
    }
  }

};
</script>
