<template>
  <div class="hello">
    {{msg}}
    <el-row>
      <el-button @click.prevent="postdata" type="primary">主要按钮</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        msg: '登录'
      };
    },
    methods: {
      postdata () {
        let data = {
          companyNumber: 'zxzh',
          password: '123456',
          userNumber: 'yangzhaoguo'
        };
        let retCallback = (ret) => {
          console.log(ret);
          this.$router.push({name: 'train'});
        };
        let errCallback = (err) => {
          console.log(err);
        };
        this.$request('/api/login/submitLogin.jhtml', 'post', data, retCallback, errCallback);
      }
    }
  };
</script>

<style scoped lang="less">
</style>
