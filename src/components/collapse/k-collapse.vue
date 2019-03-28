<template>

  <el-collapse
  v-model="model"
  :accordion="accordion"
  @change="handleChange($event)"
  >
    <slot></slot>
  </el-collapse>
</template>
<script>
import { Collapse } from 'element-ui';
export default {
  name: 'KCollapse',
  components: {
    'el-collapse': Collapse
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
    accordion: Boolean,
    value: {
      type: [Array, String, Number],
      default () {
        return [];
      }
    }
  },
  methods: {
    handleChange (val) {
      this.$emit('change', val);
    }
  }

};
</script>
