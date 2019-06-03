import axios from 'axios';
import qs from 'qs';
import { api } from './config';
import store from '../../vuex/index';

let util = {};
util.install = function (Vue){
  // ajax请求
  Vue.prototype.$request = function (url = '', type = 'POST', data = {}, retCallback, errCallback, loadingShow = true, timeout = 60000){
    store.commit('toggleLoading', true);
    type = type.toUpperCase();
    data.HimyAuthorization = window.localStorage.getItem('token');
    let opaction = {
      method: type,
      url: api + url,
      timeout: timeout,
      data: qs.stringify(data)
    };
    axios(opaction).then((response) => {
      store.commit('toggleLoading', false);
      retCallback(response.data);
    }, (err) => {
      store.commit('toggleLoading', false);
      if (!data.HimyAuthorization) {
        if (localStorage.getItem('izZt') === 'true') {
          Vue.$router.replace({ path: '/login' });
        }
      }
      errCallback(err.data);
    });
  };
};
export default util;
