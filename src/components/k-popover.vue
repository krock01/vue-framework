<template>
  <el-popover
  v-model="model"
  :trigger="trigger"
  :title="title"
  :content="content"
  :width="width"
  :placement="placement"
  :disabled="disabled"
  :offset="offset"
  :transition="transition"
  :visible-arrow="visibleArrow"
  :popper-options="popperOptions"
  :popper-class="popperClass"
  :open-delay="openDelay"
  @show="handleShow($event)"
  @after-enter="handleAfterEnter($event)"
  @hide="handleHide($event)"
  @after-leave="handleAfterLeave($event)"
  >
  <slot></slot>
  <slot name="reference" slot="reference"></slot>
  </el-popover>
</template>
<script>
import { Popover } from 'element-ui';
export default {
  name: 'KPopover',
  components: {
    'el-popover': Popover
  },
  computed: {
    model: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      }
    }
  },
  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
    },
    openDelay: {
      type: Number,
      default: 0
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    popperOptions: {}
  },
  methods: {
    handleShow (val) {
      this.$emit('show', val);
    },
    handleAfterEnter (val) {
      this.$emit('after-enter', val);
    },
    handleHide (val) {
      this.$emit('hide', val);
    },
    handleAfterLeave (val) {
      this.$emit('after-leave', val);
    }
  }
};
</script>
