<template>
  <el-collapse-item
  :name="name"
  :title="title"
  >
    <slot></slot>
  </el-collapse-item>
</template>
<script>
import { CollapseItem } from 'element-ui';
export default {
  name: 'KCollapse',
  components: {
    'el-collapse-item': CollapseItem
  },
  props: {
    title: String,
    name: {
      type: [String, Number],
      default () {
        return this._uid;
      }
    }
  }
};
</script>
