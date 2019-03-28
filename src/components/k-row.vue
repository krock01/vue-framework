<template>
  <el-row
  :tag="tag"
  :gutter="gutter"
  :type="type"
  :justify="justify"
  :align="align"
  >
    <slot></slot>
  </el-row>
</template>

<script>

import { Row } from 'element-ui';

export default {
  name: 'KRow',
  components: {
    'el-row': Row
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  }
};
</script>
