<template>
  <div class="con" style="color: red;">
    {{name}}
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "train",
    computed: {
      ...mapState({
        name: state => state.aa.name
      })
    }
  };
</script>

<style scoped lang="less">
  .con {
    width: 100px;
    .left {
      color: red;
    }
  }
</style>
