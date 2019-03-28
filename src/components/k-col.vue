<template>
  <el-col
  :span="span"
  :tag="tag"
  :offset="offset"
  :pull="pull"
  :push="push"
  :xs="xs"
  :sm="sm"
  :md="md"
  :lg="lg"
  :xl="xl">
    <slot></slot>
  </el-col>
</template>

<script>

import { Col } from 'element-ui';

export default {
  name: 'KCol',
  components: {
    'el-col': Col
  },
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  }
};
</script>
