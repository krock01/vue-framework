<template>
  <el-carousel
  ref="carousel"
  :height="height"
  :initial-index="initialIndex"
  :trigger="trigger"
  :autoplay="autoplay"
  :interval="interval"
  :indicator-position="indicatorPosition"
  :arrow="arrow"
  :type="type"
  :loop="loop"
  @change="handleChange($event)"
  >
    <slot></slot>
  </el-carousel>
</template>
<script>
import { Carousel } from 'element-ui';
export default {
  name: 'KCarousel',
  components: {
    'el-carousel': Carousel
  },
  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    height: String,
    trigger: {
      type: String,
      default: 'hover'
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    indicatorPosition: String,
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: String,
      default: 'hover'
    },
    type: String,
    loop: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleChange (val) {
      this.$emit('change', val);
    },
    setActiveItem (index) {
      this.$refs.carousel.setActiveItem(index);
    },
    prev () {
      this.$refs.carousel.prev();
    },
    next () {
      this.$refs.carousel.next();
    }
  }
};
</script>
