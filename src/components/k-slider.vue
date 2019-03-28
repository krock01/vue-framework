<template>

  <el-slider
  v-model="model"
  :min="min"
  :max="max"
  :step="step"
  :showInput="showInput"
  :showInputControls="showInputControls"
  :inputSize="inputSize"
  :showStops="showStops"
  :showTooltip="showTooltip"
  :formatTooltip="formatTooltip"
  :disabled="disabled"
  :range="range"
  :vertical="vertical"
  :height="height"
  :debounce="debounce"
  :label="label"
  :tooltipClass="tooltipClass"
  @change="handleChange($event)"
  >
  </el-slider>
</template>
<script>
import { Slider } from 'element-ui';
export default {
  name: 'KSlider',
  components: {
    'el-slider': Slider
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
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: [Number, Array],
      default: 0
    },
    showInput: {
      type: Boolean,
      default: false
    },
    showInputControls: {
      type: Boolean,
      default: true
    },
    inputSize: {
      type: String,
      default: 'small'
    },
    showStops: {
      type: Boolean,
      default: false
    },
    showTooltip: {
      type: Boolean,
      default: true
    },
    formatTooltip: Function,
    disabled: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    height: {
      type: String
    },
    debounce: {
      type: Number,
      default: 300
    },
    label: {
      type: String
    },
    tooltipClass: String
  },
  methods: {
    handleChange (val) {
      this.$emit('change', val);
    }
  }
};
</script>
