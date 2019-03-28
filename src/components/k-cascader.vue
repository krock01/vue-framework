<template>
  <el-cascader
  :options="options"
  :props="props"
  :value="value"
  :separator="separator"
  :placeholder="placeholder"
  :disabled="disabled"
  :clearable="clearable"
  :changeOnSelect="changeOnSelect"
  :popperClass="popperClass"
  :expandTrigger="expandTrigger"
  :filterable="filterable"
  :debounce="debounce"
  :size="size"
  :beforeFilter="beforeFilter"
  :showAllLevels="showAllLevels"
  @visible-change="handleVisibleChange($event)"
  @active-item-change="handleActiveItemChange($event)"
  @change="handleChange($event)"
  @blur="handleBlur($event)"
  @focus="handleFocus($event)"
  ></el-cascader>
</template>

<script>
import { Cascader } from 'element-ui';

export default {
  name: 'KCascader',
  components: {
    'el-cascader': Cascader
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    props: {
      type: Object,
      default () {
        return {
          children: 'children',
          label: 'label',
          value: 'value',
          disabled: 'disabled'
        };
      }
    },
    value: {
      type: Array,
      default () {
        return [];
      }
    },
    separator: {
      type: String,
      default: '/'
    },
    placeholder: String,
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: false
    },
    changeOnSelect: Boolean,
    popperClass: String,
    expandTrigger: {
      type: String,
      default: 'click'
    },
    filterable: Boolean,
    size: String,
    showAllLevels: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 300
    },
    beforeFilter: {
      type: Function,
      default: () => () => {}
    }
  },
  methods: {
    handleVisibleChange (val) {
      this.$emit('visible-change', val);
    },
    handleActiveItemChange (val) {
      this.$emit('active-item-change', val);
    },
    handleChange (val) {
      this.$emit('change', val);
    },
    handleBlur (val) {
      this.$emit('blur', val);
    },
    handleFocus (val) {
      this.$emit('focus', val);
    }
  }
};
</script>
