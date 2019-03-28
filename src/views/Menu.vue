<template>
  <div>
    <k-input v-model="menuValue" placeholder="请输入内容"></k-input>
  </div>
</template>
<script>
import KInput from '@/components/input/k-input';
export default {
  name: 'menu',
  components: {
    KInput
  },
  data () {
    return {
      menuValue: null
    };
  }
};
</script>
