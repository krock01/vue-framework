<template>

  <el-progress
  :percentage="percentage"
  :type="type"
  :stroke-width="strokeWidth"
  :text-inside="textInside"
  :status="status"
  :color="color"
  :width="width"
  :show-text="showText"
  ></el-progress>
</template>
<script>
import { Progress } from 'element-ui';
export default {
  name: 'KProgress',
  components: {
    'el-progress': Progress
  },
  props: {
    type: {
      type: String,
      default: 'line',
      validator: val => ['line', 'circle'].indexOf(val) > -1
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: val => val >= 0 && val <= 100
    },
    status: {
      type: String,
      validator: val => ['text', 'success', 'exception'].indexOf(val) > -1
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    textInside: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 126
    },
    showText: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    }
  }
};
</script>
