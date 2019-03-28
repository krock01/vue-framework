<template>
  <el-submenu
  :index="index"
  :show-timeout="showTimeout"
  :hide-timeout="hideTimeout"
  :popper-class="popperClass"
  :disabled="disabled"
  :popper-append-to-body="popperAppendToBody"
  >
  <slot name="title" slot="title"></slot>
  <slot></slot>
  </el-submenu>
</template>
<script>
import { Submenu } from 'element-ui';
export default {
  name: 'KSubmenu',
  components: {
    'el-submenu': Submenu
  },
  props: {
    index: {
      type: String,
      required: true
    },
    showTimeout: {
      type: Number,
      default: 300
    },
    hideTimeout: {
      type: Number,
      default: 300
    },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: undefined
    }
  }
};
</script>
