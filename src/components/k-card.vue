<template>
  <el-card
  :header="header"
  :body-style="bodyStyle"
  :shadow="shadow"
  >
    <slot></slot>
  </el-card>
</template>
<script>
import { Card } from 'element-ui';
export default {
  name: 'KCard',
  components: {
    'el-card': Card
  },
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String
    }
  }
};
</script>
