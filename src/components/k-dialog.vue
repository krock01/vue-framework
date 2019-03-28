<template>
  <el-dialog
    :visible="visible"
    :title="title"
    :width="width"
    :fullscreen="fullscreen"
    :top="top"
    :modal="modal"
    :modal-append-to-body="modalAppendToBody"
    :append-to-body="appendToBody"
    :lock-scroll="lockScroll"
    :custom-class="customClass"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :show-close="showClose"
    :before-close="beforeClose"
    :center="center"
    @open="handleOpen($event)"
    @opened="handleOpened($event)"
    @close="handleClose($event)"
    @closed="handleClosed($event)"
  >
    <slot></slot>
    <slot name="title" slot="title"></slot>
    <slot name="footer" slot="footer"></slot>
  </el-dialog>
</template>
<script>
import { Dialog } from 'element-ui';
export default {
  name: 'KDialog',
  components: {
    'el-dialog': Dialog
  },
  props: {
    title: {
      type: String,
      default: ''
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: false
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: true
    },

    width: String,

    fullscreen: Boolean,

    customClass: {
      type: String,
      default: ''
    },

    top: {
      type: String,
      default: '15vh'
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleOpen (val) {
      this.$emit('open', val);
    },
    handleOpened (val) {
      this.$emit('opened', val);
    },
    handleClose (val) {
      this.$emit('close', val);
    },
    handleClosed (val) {
      this.$emit('closed', val);
    }
  }
};
</script>
