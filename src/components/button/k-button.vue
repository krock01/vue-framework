<template>
  <el-button
  :type="type"
  :icon="icon"
  :size="size"
  :nativeType="nativeType"
  :loading="loading"
  :disabled="disabled"
  :plain="plain"
  :autofocus="autofocus"
  :round="round"
  :circle="circle"
  @click="handleClick"
   >
    <slot></slot>
  </el-button>
</template>

<script>
import { Button } from 'element-ui';
export default {
  name: 'KButton',
  components: {
    'el-button': Button
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  methods: {
    handleClick () {
      this.$emit('click');
    }
  }
};
</script>
