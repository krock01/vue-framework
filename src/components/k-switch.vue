<template>
  <el-switch
    ref="switch"
    v-model="model"
    :activeColor="activeColor"
    :inactiveColor="inactiveColor"
    :disabled="disabled"
    :width="width"
    :activeIconClass="activeIconClass"
    :inactiveIconClass="inactiveIconClass"
    :activeText="activeText"
    :inactiveText="inactiveText"
    :activeValue="activeValue"
    :inactiveValue="inactiveValue"
    :name="name"
    @change="handleChange($event)"
  ></el-switch>
</template>
<script>
import { Switch } from 'element-ui';

export default {
  name: 'KSwitch',
  components: {
    'el-switch': Switch
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
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeIconClass: {
      type: String,
      default: ''
    },
    inactiveIconClass: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    focus () {
      this.$refs.switch.focus();
    },
    handleChange (val) {
      this.$emit('change', val);
    }
  }
};
</script>
