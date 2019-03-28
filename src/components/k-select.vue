<template>
  <el-select
  v-model="model"
  :name="name"
  :value="value"
  :multiple="multiple"
  :disabled="disabled"
  :valueKey="valueKey"
  :collapseTags="collapseTags"
  :multipleLimit="multipleLimit"
  :autocomplete="autocomplete"
  :placeholder="placeholder"
  :filterable="filterable"
  :allowCreate="allowCreate"
  :filterMethod="filterMethod"
  :remote="remote"
  :remoteMethod="remoteMethod"
  :loading="loading"
  :loadingText="loadingText"
  :popperClass="popperClass"
  :noMatchText="noMatchText"
  :noDataText="noDataText"
  :defaultFirstOption="defaultFirstOption"
  :reserveKeyword="reserveKeyword"
  :automaticDropdown="automaticDropdown"
  :popperAppendToBody="popperAppendToBody"
  @visible-change="handleVisibleChange($event)"
  @change="handleChange($event)"
  @blur="handleBlur($event)"
  @focus="handleFocus($event)"
  @clear="handleClear($event)"
  @remove-tag="handleRemoveTag($event)"
  >
  <slot></slot>
    <slot name="prefix" slot="prefix"></slot>
  </el-select>
</template>

<script>
import { Select } from 'element-ui';
export default {
  name: 'KSelect',
  components: {
    'el-select': Select
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
    name: String,
    value: {
      required: true
    },
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    disabled: Boolean,
    clearable: Boolean,
    collapseTags: Boolean,
    autocomplete: {
      type: String,
      default: 'off'
    },
    placeholder: String,
    filterable: Boolean,
    allowCreate: Boolean,
    filterMethod: Function,
    remote: Boolean,
    remoteMethod: Function,
    loading: Boolean,
    loadingText: String,
    popperClass: String,
    noMatchText: String,
    noDataText: String,
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    automaticDropdown: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleVisibleChange (val) {
      this.$emit('visible-change', val);
    },
    handleChange (val) {
      this.$emit('change', val);
    },
    handleBlur (val) {
      this.$emit('blur', val);
    },
    handleFocus (val) {
      this.$emit('focus', val);
    },
    handleClear (val) {
      this.$emit('clear', val);
    },
    handleRemoveTag (val) {
      this.$emit('remove-tag', val);
    }
  }
};
</script>
