<template>
  <el-tag
  :type="type"
  :closable="closable"
  :disable-transitions="disableTransitions"
  :hit="hit"
  :color="color"
  :size="size"
  @close="handleClose($event)"
  ></el-tag>
</template>
<script>
import { Tag } from 'element-ui';
export default {
  name: 'KTag',
  components: {
    'el-tag': Tag
  },
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String
  },
  methods: {
    handleClose (val) {
      this.$emit('close', val);
    }
  }
};
</script>
