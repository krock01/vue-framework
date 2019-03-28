<template>

  <el-dropdown-item
  :command="command"
  :disabled="disabled"
  :divided="divided"
  >
  <slot></slot>
  </el-dropdown-item>
</template>
<script>
import { DropdownItem } from 'element-ui';
export default {
  name: 'KDropdownItem',
  components: {
    'el-dropdown-item': DropdownItem
  },
  props: {
    command: {},
    disabled: Boolean,
    divided: Boolean
  }
};
</script>
