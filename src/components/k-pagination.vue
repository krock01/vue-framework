<template>
  <el-pagination
  :small="small"
  :background="background"
  :page-size="pageSize"
  :total="total"
  :page-count="pageCount"
  :pager-count="pagerCount"
  :current-page="currentPage"
  :layout="layout"
  :page-sizes="pageSizes"
  :popper-class="popperClass"
  :prev-text="prevText"
  :next-text="nextText"
  :disabled="disabled"
  @size-change="handleSizeChange($event)"
  @current-change="handleCurrentChange($event)"
  @prev-click="handlePrevClick($event)"
  @next-click="handleNextClick($event)"

  >
  <slot></slot>
  </el-pagination>
</template>

<script>
import { Pagination } from 'element-ui';
export default {
  name: 'KPagination',
  components: {
    'el-pagination': Pagination
  },

  props: {
    pageSize: {
      type: Number,
      default: 10
    },

    small: Boolean,

    total: Number,

    pageCount: Number,

    pagerCount: {
      type: Number,
      validator (value) {
        return (value | 0) === value && value > 4 && value < 22 && (value % 2) === 1;
      },
      default: 7
    },

    currentPage: {
      type: Number,
      default: 1
    },

    layout: {
      default: 'prev, pager, next, jumper, ->, total'
    },

    pageSizes: {
      type: Array,
      default () {
        return [10, 20, 30, 40, 50, 100];
      }
    },

    popperClass: String,

    prevText: String,

    nextText: String,

    background: Boolean,

    disabled: Boolean
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('size-change', val);
    },
    handleCurrentChange (val) {
      this.$emit('current-change', val);
    },
    handlePrevClick (val) {
      this.$emit('prev-click', val);
    },
    handleNextClick (val) {
      this.$emit('next-click', val);
    }
  }

};
</script>
