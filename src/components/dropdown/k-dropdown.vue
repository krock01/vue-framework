<template>
  <el-dropdown
  :type="type"
  :size="size"
  :split-button="splitButton"
  :placement="placement"
  :trigger="trigger"
  :hide-on-click="hideOnClick"
  :show-timeout="showTimeout"
  :hide-timeout="hideTimeout"
  @click="handleClick($event)"
  @command="handleCommand($event)"
  @visible-change="handleVisibleChange($event)"
  >
    <slot></slot>
  <el-dropdown-menu slot="dropdown" :visible-arrow="visibleArrow"
  :arrow-offset="arrowOffset">
    <slot name="dropdown-item"></slot>
  </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import { Dropdown, DropdownMenu } from 'element-ui';
export default {
  name: 'KDropdown',
  components: {
    'el-dropdown': Dropdown,
    'el-dropdown-menu': DropdownMenu
  },
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    type: String,
    size: {
      type: String,
      default: ''
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-end'
    },
    visibleArrow: {
      default: true
    },
    showTimeout: {
      type: Number,
      default: 250
    },
    hideTimeout: {
      type: Number,
      default: 150
    },
    arrowOffset: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClick (val) {
      this.$emit('click', val);
    },
    handleCommand (val) {
      this.$emit('command', val);
    },
    handleVisibleChange (val) {
      this.$emit('visible-change', val);
    }
  }

};
</script>
