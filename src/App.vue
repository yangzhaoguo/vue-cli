<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
  import Loading from './comments/loading/loading';
  import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'App',
    created (){
      this.toggleLoading(false);
    },
    computed: {
      ...mapState({
        showLoading: state => state.isLoading
      })
    },
    methods: {
      ...mapMutations(["toggleLoading"])
    },
    components: {
      Loading
    }
  };
</script>

<style>
  body, html, #app {
    min-height: 100%;
    background: #ffffff;
  }
</style>
