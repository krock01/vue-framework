<template>
  <el-color-picker
  v-model="model"
  :show-alpha="showAlpha"
  :disabled="disabled"
  :size="size"
  :color-format="colorFormat"
  :popper-class="popperClass"
  :predefine="predefine"
  @change="handleChange($event)"
  @active-change="handleActiveChange($event)"
  ></el-color-picker>
</template>
<script>
import { ColorPicker } from 'element-ui';
// 依赖于button组件
// eslint-disable-next-line
import KButton from './k-button';
export default {
  name: 'KColorPicker',
  components: {
    'el-color-picker': ColorPicker
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
    value: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: String,
    popperClass: String,
    predefine: Array
  },
  methods: {

    handleChange (val) {
      this.$emit('change', val);
    },
    handleActiveChange (val) {
      this.$emit('active-change', val);
    }
  }
};
</script>
