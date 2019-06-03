<template>
  <div id="wrapper" @touchmove.prevent @click.stop>
    <img src="../../assets/images/loading/timg.gif" alt="">
  </div>
</template>

<script>
  export default {
    name: 'App',
    created (){
    },
    comments: {}
  };
</script>

<style lang="less" scoped>
  #wrapper {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(225, 225, 225, 0.5);
    z-index: 100000;
    display: flex;
    img {
      width: 80px;
      margin: auto;
    }
  }
</style>
