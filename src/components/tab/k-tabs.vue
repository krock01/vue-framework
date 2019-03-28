<template>

  <el-tabs
  v-model="model"
  :type="type"
  :closable="closable"
  :addable="addable"
  :editable="editable"
  :tabPosition="tabPosition"
  :beforeLeave="beforeLeave"
  :stretch="stretch"
  @tab-click="handleTabClick($event)"
  @tab-remove="handleTabRemove($event)"
  @tab-add="handleTabAdd($event)"
  @edit="handleEdit($event)"
  >
    <slot></slot>
  </el-tabs>
</template>
<script>
import { Tabs } from 'element-ui';
export default {
  name: 'KTabs',
  components: {
    'el-tabs': Tabs
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
    type: String,
    activeName: String,
    closable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean,
    tabPosition: {
      type: String,
      default: 'top'
    },
    beforeLeave: Function,
    stretch: Boolean
  },
  methods: {
    handleTabClick (val) {
      this.$emit('tab-click', val);
    },
    handleTabRemove (val) {
      this.$emit('tab-remove', val);
    },
    handleTabAdd (val) {
      this.$emit('tab-add', val);
    },
    handleEdit (val) {
      this.$emit('edit', val);
    }
  }
};
</script>
