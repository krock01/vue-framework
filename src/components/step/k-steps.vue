<template>
  <el-steps
  :space="space"
  :active="active"
  :direction="direction"
  :align-center="alignCenter"
  :simple="simple"
  :finish-status="finishStatus"
  :process-status="processStatus"
  >
  <slot></slot>
  </el-steps>
</template>
<script>
import { Steps } from 'element-ui';
export default {
  name: 'KSteps',
  components: {
    'el-steps': Steps
  },
  props: {
    space: [Number, String],
    active: Number,
    direction: {
      type: String,
      default: 'horizontal'
    },
    alignCenter: Boolean,
    simple: Boolean,
    finishStatus: {
      type: String,
      default: 'finish'
    },
    processStatus: {
      type: String,
      default: 'process'
    }
  }
};
</script>
