<template>
  <el-transfer
  ref="transfer"
  :data="data"
  :filterable="filterable"
  :filter-placeholder="filterPlaceholder"
  :filter-method="filter-method"
  :target-order="targetOrder"
  :title="titles"
  :button-texts="buttonTexts"
  :render-content="renderContent"
  :format="format"
  :props="props"
  :left-default-checked="leftDefaultChecked"
  :right-default-checked="rightDefaultChecked"
  @change="handleChange($event)"
  @left-check-change="handleLeftCheckChange($event)"
  @right-check-change="handleRightCheckChange($event)"
  >
    <slot name="left-footer" slot="left-footer"></slot>
    <slot name="right-footer" slot="right-footer"></slot>
  </el-transfer>
</template>

<script>
import { Transfer } from 'element-ui';
export default {
  name: 'KTransfer',
  components: {
    'el-transfer': Transfer
  },
  props: {
    data: {
      type: Array,
      default () {
        return [];
      }
    },
    titles: {
      type: Array,
      default () {
        return [];
      }
    },
    buttonTexts: {
      type: Array,
      default () {
        return [];
      }
    },
    filterPlaceholder: {
      type: String,
      default: ''
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default () {
        return [];
      }
    },
    rightDefaultChecked: {
      type: Array,
      default () {
        return [];
      }
    },
    renderContent: Function,
    value: {
      type: Array,
      default () {
        return [];
      }
    },
    format: {
      type: Object,
      default () {
        return {};
      }
    },
    filterable: Boolean,
    props: {
      type: Object,
      default () {
        return {
          label: 'label',
          key: 'key',
          disabled: 'disabled'
        };
      }
    },
    targetOrder: {
      type: String,
      default: 'original'
    }
  },
  methods: {
    handleChange (val) {
      this.$emit('change', val);
    },
    handleLeftCheckChange (val) {
      this.$emit('left-check-change', val);
    },
    handleRightCheckChange (val) {
      this.$emit('right-check-change', val);
    },
    clearQuery (which) {
      this.$refs.transfer.clearQuery(which);
    }
  }

};
</script>
