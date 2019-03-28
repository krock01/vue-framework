<template>
  <el-alert
  :title="title"
  :description="description"
  :type="type"
  :closable="closable"
  :closeText="closeText"
  :showIcon="showIcon"
  :center="center"
  >
  <slot name="title" slot="title"></slot>
  </el-alert>
</template>

<script>
import { Alert } from 'element-ui';
export default {
  name: 'KAlert',
  components: {
    'el-alert': Alert
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: Boolean,
    center: Boolean
  }
};
</script>
