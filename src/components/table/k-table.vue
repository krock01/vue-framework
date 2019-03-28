<template>
  <el-table
  ref="table"
  :data="data"
  :height="height"
  :max-height="maxHeight"
  :stripe="stripe"
  :border="border"
  :size="size"
  :fit="fit"
  :show-header="showHeader"
  :highlight-current-row="highlightCurrentRow"
  :current-row-key="currentRowKey"
  :row-class-name="rowClassName"
  :row-style="rowStyle"
  :cell-class-name="cellClassName"
  :cell-style="cellStyle"
  :header-row-class-name="headerRowClassName"
  :header-row-style="headerRowStyle"
  :header-cell-class-name="headerCellClassName"
  :header-cell-style="headerCellStyle"
  :row-key="rowKey"
  :empty-text="emptyText"
  :default-expand-all="defaultExpandAll"
  :expand-row-keys="expandRowKeys"
  :default-sort="defaultSort"
  :tooltip-effect="tooltipEffect"
  :show-summary="showSummary"
  :sum-text="sumText"
  :summary-method="summaryMethod"
  :span-method="spanMethod"
  :select-on-indeterminate="selectOnIndeterminate"
  @select="handleSelect($event)"
  @select-all="handleSelectAll($event)"
  @selection-change="handleSelectionChange($event)"
  @cell-mouse-enter="handleCellMouseEnter($event)"
  @cell-mouse-leave="handleCellMouseLeave($event)"
  @cell-click="handleCellClick($event)"
  @cell-dblclick="handleCellDBClick($event)"
  @row-click="handleRowClick($event)"
  @row-contextmenu="handleRowContextmenu($event)"
  @row-dblclick="handleRowDBClick($event)"
  @header-click="handleHeaderClick($event)"
  @header-contextmenu="handleHeaderContextmenu($event)"
  @sort-change="handleSortChange($event)"
  @filter-change="handleFilterChange($event)"
  @current-change="handleCurrentChange($event)"
  @header-dragend="handleHeaderDragend($event)"
  @expand-change="handleExpandChange($event)"
  >
    <slot></slot>
    <slot name="append" slot="append"></slot>
  </el-table>
</template>
<script>
import { Table } from 'element-ui';
export default {
  name: 'KTable',
  components: {
    'el-table': Table
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      }
    },

    size: String,

    width: [String, Number],

    height: [String, Number],

    maxHeight: [String, Number],

    fit: {
      type: Boolean,
      default: true
    },

    stripe: Boolean,

    border: Boolean,

    rowKey: [String, Function],

    context: {},

    showHeader: {
      type: Boolean,
      default: true
    },

    showSummary: Boolean,

    sumText: String,

    summaryMethod: Function,

    rowClassName: [String, Function],

    rowStyle: [Object, Function],

    cellClassName: [String, Function],

    cellStyle: [Object, Function],

    headerRowClassName: [String, Function],

    headerRowStyle: [Object, Function],

    headerCellClassName: [String, Function],

    headerCellStyle: [Object, Function],

    highlightCurrentRow: Boolean,

    currentRowKey: [String, Number],

    emptyText: String,

    expandRowKeys: Array,

    defaultExpandAll: Boolean,

    defaultSort: Object,

    tooltipEffect: String,

    spanMethod: Function,

    selectOnIndeterminate: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleSelect (event) {
      this.$emit('select', event);
    },
    handleSelectAll (event) {
      this.$emit('select-all', event);
    },
    handleSelectionChange (event) {
      this.$emit('selection-change', event);
    },
    handleCellMouseEnter (event) {
      this.$emit('cell-mouse-enter', event);
    },
    handleCellMouseLeave (event) {
      this.$emit('cell-mouse-leave', event);
    },
    handleCellClick (event) {
      this.$emit('cell-click', event);
    },
    handleCellDBClick (event) {
      this.$emit('cell-dbclick', event);
    },
    handleRowClick (event) {
      this.$emit('row-click', event);
    },
    handleRowContextmenu (event) {
      this.$emit('row-contextmenu', event);
    },
    handleRowDBClick (event) {
      this.$emit('row-dbclick', event);
    },
    handleHeaderClick (event) {
      this.$emit('header-click', event);
    },
    handleHeaderContextmenu (event) {
      this.$emit('header-contextmenu', event);
    },
    handleSortChange (event) {
      this.$emit('sort-change', event);
    },
    handleFilterChange (event) {
      this.$emit('filter-change', event);
    },
    handleCurrentChange (event) {
      this.$emit('current-change', event);
    },
    handleHeaderDragend (event) {
      this.$emit('header-dragend', event);
    },
    handleExpandChange (event) {
      this.$emit('expand-change', event);
    },
    clearSelection () {
      this.$refs.table.clearSelection();
    },
    toggleRowSelection (row, selected) {
      this.$refs.table.toggleRowSelection(row, selected);
    },
    toggleAllSelection () {
      this.$refs.table.toggleAllSelection();
    },
    toggleRowExpansion (row, expanded) {
      this.$refs.table.toggleRowExpansion(row, expanded);
    },
    setCurrentRow (row) {
      this.$refs.table.setCurrentRow(row);
    },
    clearSort () {
      this.$refs.table.clearSort();
    },
    clearFilter (key) {
      this.$refs.table.clearFilter(key);
    },
    doLayout () {
      this.$refs.table.doLayout();
    },
    sort (prop, order) {
      this.$refs.table.doLayout(prop, order);
    }
  }

};
</script>
