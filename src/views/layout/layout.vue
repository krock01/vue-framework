<template>
<k-container>
  <sidebar></sidebar>
  <k-container direction="vertical">
    <l-header></l-header>
    <l-main></l-main>
  </k-container>
</k-container>
</template>
<script>
import KContainer from '@/components/k-container';
import Sidebar from './src/sidebar';
import LHeader from './src/header';
import LMain from './src/main';
export default {
  name: 'Layout',
  components: {
    KContainer,
    Sidebar,
    LHeader,
    LMain
  },
  methods: {
  }
};
</script>
