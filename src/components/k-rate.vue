<template>
  <el-rate
  v-model="model"
  :max="max"
  :disabled="disabled"
  :allow-half="allowHalf"
  :low-threshold="lowThreshold"
  :high-threshold="highThreshold"
  :colors="colors"
  :void-color="voidColor"
  :disabled-void-color="disabledVoidColor"
  :icon-classes="iconClasses"
  :void-icon-class="voidIconClass"
  :disabled-void-icon-class="disabledVoidIconClass"
  :show-text="showText"
  :show-score="showScore"
  :text-color="textColor"
  :texts="texts"
  :score-template="scoreTemplate"
   @change="handleChange($event)"
  ></el-rate>
</template>

<script>
import { Rate } from 'element-ui';

export default {
  name: 'KRate',
  components: {
    'el-rate': Rate
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
    value: {
      type: Number,
      default: 0
    },
    lowThreshold: {
      type: Number,
      default: 2
    },
    highThreshold: {
      type: Number,
      default: 4
    },
    max: {
      type: Number,
      default: 5
    },
    colors: {
      type: Array,
      default () {
        return ['#F7BA2A', '#F7BA2A', '#F7BA2A'];
      }
    },
    voidColor: {
      type: String,
      default: '#C6D1DE'
    },
    disabledVoidColor: {
      type: String,
      default: '#EFF2F7'
    },
    iconClasses: {
      type: Array,
      default () {
        return ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'];
      }
    },
    voidIconClass: {
      type: String,
      default: 'el-icon-star-off'
    },
    disabledVoidIconClass: {
      type: String,
      default: 'el-icon-star-on'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    showScore: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: '#1f2d3d'
    },
    texts: {
      type: Array,
      default () {
        return ['极差', '失望', '一般', '满意', '惊喜'];
      }
    },
    scoreTemplate: {
      type: String,
      default: '{value}'
    }
  },
  methods: {

    handleChange (val) {
      this.$emit('change', val);
    }

  }
};
</script>
