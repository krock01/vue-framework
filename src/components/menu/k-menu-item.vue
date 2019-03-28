<template>
  <el-menu-item
  :index="index"
  :route="route"
  :disabled="disabled"
  @click="handleClick($event)"
  >
  <slot name="title" slot="title"></slot>
  <slot></slot>
  </el-menu-item>
</template>
<script>
import { MenuItem } from 'element-ui';
export default {
  name: 'KMenuItem',
  components: {
    'el-menu-item': MenuItem
  },
  props: {
    index: {
      type: String,
      required: true
    },
    route: [String, Object],
    disabled: Boolean
  },
  methods: {
    handleClick (val) {
      this.$emit('click', val);
    }
  }
};
</script>
