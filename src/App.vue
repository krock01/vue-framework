<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { routes } from './router';
export default {
  name: 'app',
  created () {
    const includes = routes.routes[0].children.filter(val =>
      val.meta.cache).map(val => {
      return val.name;
    }
    );

    this.$store.dispatch('initView', includes);
  }
};
</script>

<style lang="scss" src="./style.scss"></style>
