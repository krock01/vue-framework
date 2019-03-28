<template>
  <el-tree
  ref="tree"
  :data="data"
  :empty-text="emptyText"
  :node-key="nodeKey"
  :props="props"
  :render-after-expand="renderAfterExpand"
  :load="load"
  :render-content="renderContent"
  :highlight-current="highlightCurrent"
  :default-expand-all="defaultExpandAll"
  :expand-on-click-node="expandOnClickNode"
  :check-on-click-node="checkOnClickNode"
  :auto-expand-parent="autoExpandParent"
  :default-expanded-keys="defaultCheckedKeys"
  :show-checkbox="showCheckbox"
  :check-strictly="checkStrictly"
  :default-checked-keys="defaultCheckedKeys"
  :current-node-key="currentNodeKey"
  :filter-node-method="filterNodeMethod"
  :accordion="accordion"
  :indent="indent"
  :icon-class="iconClass"
  :lazy="lazy"
  :draggable="draggable"
  :allow-drag="allowDrag"
  :allow-drop="allow-drop"
  @node-click="handleNodeClick($event)"
  @node-contextmenu="handleNodeContextmenu($event)"
  @check-change="handleCheckChange($event)"
  @check="handleCheck($event)"
  @current-change="handleCurrentChange($event)"
  @node-expand="handleNodeExpand($event)"
  @node-collapse="handleNodeCollapse($event)"
  @node-drag-start="handleNodeDragStart($event)"
  @node-drag-enter="handleNodeDragEnter($event)"
  @node-drag-leave="handleNodeDragLeave($event)"
  @node-drag-over="handleNodeDragOver($event)"
  @node-drag-end="handleNodeDragEnd($event)"
  @node-drop="handleNodeDrop($event)"
  >
  <slot></slot>
  </el-tree>
</template>
<script>
import { Tree } from 'element-ui';
export default {
  name: 'KTree',
  components: {
    'el-tree': Tree
  },
  props: {
    data: {
      type: Array
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: false
    },
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      default () {
        return {
          children: 'children',
          label: 'label',
          disabled: 'disabled'
        };
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    iconClass: String
  },
  methods: {
    handleNodeClick (val) {
      this.$emit('node-click', val);
    },
    handleNodeContextmenu (val) {
      this.$emit('node-contextmenu', val);
    },
    handleCheckChange (val) {
      this.$emit('check-change', val);
    },
    handleCheck (val) {
      this.$emit('check', val);
    },
    handleCurrentChange (val) {
      this.$emit('current-change', val);
    },
    handleNodeExpand (val) {
      this.$emit('node-expand', val);
    },
    handleNodeCollapse (val) {
      this.$emit('node-collapse', val);
    },
    handleNodeDragStart (val) {
      this.$emit('node-drag-start', val);
    },
    handleNodeDragEnter (val) {
      this.$emit('node-drag-enter', val);
    },
    handleNodeDragLeave (val) {
      this.$emit('node-drag-leave', val);
    },
    handleNodeDragOver (val) {
      this.$emit('node-drag-over', val);
    },
    handleNodeDragEnd (val) {
      this.$emit('node-drag-end', val);
    },
    handleNodeDrop (val) {
      this.$emit('node-drop', val);
    },
    filter () {
      this.$refs.tree.filter();
    },
    updateKeyChildren (key, data) {
      this.$refs.tree.updateKeyChildren(key, data);
    },
    getCheckedNodes (leafOnly, includeHalfChecked) {
      this.$refs.tree.getCheckedNodes(leafOnly, includeHalfChecked);
    },
    setCheckedNodes (nodes) {
      this.$refs.tree.setCheckedNodes(nodes);
    },
    getCheckedKeys (leafOnly) {
      this.$refs.tree.getCheckedKeys(leafOnly);
    },
    setCheckedKeys (keys, leafOnly) {
      this.$refs.tree.setCheckedKeys(keys, leafOnly);
    },
    setChecked (data, checked, deep) {
      this.$refs.tree.setChecked(data, checked, deep);
    },
    getHalfCheckedNodes () {
      this.$refs.tree.getHalfCheckedNodes();
    },
    getHalfCheckedKeys () {
      this.$refs.tree.getHalfCheckedKeys();
    },
    getCurrentKey () {
      this.$refs.tree.getCurrentKey();
    },
    getCurrentNode () {
      this.$refs.tree.getCurrentNode();
    },
    setCurrentKey (key) {
      this.$refs.tree.setCurrentKey(key);
    },
    setCurrentNode (node) {
      this.$refs.tree.setCurrentNode(node);
    },
    getNode (data) {
      this.$refs.tree.getNode(data);
    },
    remove (data) {
      this.$refs.tree.remove(data);
    },
    append (data, parentNode) {
      this.$refs.tree.append(data, parentNode);
    },
    insertBefore (data, refNode) {
      this.$refs.tree.insertBefore(data, refNode);
    },
    insertAfter (data, refNode) {
      this.$refs.tree.insertAfter(data, refNode);
    }

  }

};
</script>
