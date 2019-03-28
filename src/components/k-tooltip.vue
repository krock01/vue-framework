<template>

  <el-tooltip
  :openDelay="openDelay"
  :disabled="disabled"
  :manual="manual"
  :effect="effect"
  :popperClass="popperClass"
  :content="content"
  :visibleArrow="visibleArrow"
  :transition="transition"
  :enterable="enterable"
  :hide-after="hideAfter"
  :offset="offset"
  >
  <slot></slot>
  </el-tooltip>
</template>

<script>
import { Tooltip } from 'element-ui';

export default {
  name: 'KTooltip',
  components: {
    'el-tooltip': Tooltip
  },
  props: {
    openDelay: {
      type: Number,
      default: 0
    },
    disabled: Boolean,
    manual: Boolean,
    effect: {
      type: String,
      default: 'dark'
    },
    popperClass: String,
    content: String,
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: 'el-fade-in-linear'
    },
    enterable: {
      type: Boolean,
      default: true
    },
    hideAfter: {
      type: Number,
      default: 0
    },
    offset: Number
  }
};
</script>
