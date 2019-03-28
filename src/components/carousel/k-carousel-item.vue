<template>
  <el-carousel-item
  :name="name"
  :label="label"
  >
  <slot></slot>
  </el-carousel-item>
</template>
<script>
import { CarouselItem } from 'element-ui';
export default {
  name: 'KCarousel',
  components: {
    'el-carousel-item': CarouselItem
  },
  props: {
    name: String,
    label: {
      type: [String, Number],
      default: ''
    }
  }
};
</script>
