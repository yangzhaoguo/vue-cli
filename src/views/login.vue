<template>
  <div class="wrapper">
    <div>
      {{name}} : {{phone}}
    </div>
    <div>
      {{loading}}
    </div>
    <input type="text" :value="name" placeholder="名字" @input="nameOnInput">
    <input type="text" placeholder="电话" @change="changeName(this.target.value)">
    <button @click="ajaxPost">button</button>
    <transition
      name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
      <p v-if="show">hello</p>
    </transition>
    <div>
      <button @click="show=!show">showHello</button>
      <router-link to="/list">goList</router-link>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';

  export default {
    name: 'Login',
    data (){
      return {
        msg: '登录',
        show: false,
        arr: 20
      };
    },
    computed: {
      ...mapState({
        name: state => state.aa.name,
        phone: state => state.aa.phone,
        loading: state => state.isLoading
      })
    },
    methods: {
      ...mapActions('aa', [
        'changeName',
        'changePhone'
      ]),
      ...mapMutations(['toggleLoading']),
      nameOnInput (e){
        this.changeName({
          data: e.target.value,
          cb: (a) => {
            console.log(a);
          }
        });
      },
      ajaxPost (){
        const data = {
          companyNumber: "zxzh",
          password: "123456a",
          userNumber: "yzg"
        };
        const url = "/api/login/submitLogin.jhtml";
        const ret = () => {
          console.log(1);
        };
        const err = () => {
          console.log(2);
        };
        this.$request(url, "POST", data, ret, err);
      }
    },
    components: {}
  };
</script>

<style scoped lang="less">
</style>
