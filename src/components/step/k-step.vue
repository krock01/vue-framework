<template>

  <el-step
  :title="title"
  :icon="icon"
  :description="description"
  :status="status"
  >
    <slot name="icon" slot="icon"></slot>
    <slot  name="title" slot="title"></slot>
    <slot  name="description" slot="description"></slot>
  </el-step>
</template>
<script>
import { Step } from 'element-ui';
export default {
  name: 'KStep',
  components: {
    'el-step': Step
  },
  props: {
    title: String,
    icon: String,
    description: String,
    status: String
  }
};
</script>
