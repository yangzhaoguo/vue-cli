import axios from 'axios';
import qs from 'qs';
import element from 'element-ui';
import {api} from './config';

let util = {};
util.install = function (Vue, options) {
  Vue.prototype.$request = function (url = '', type = 'POST', data = {}, retCallback, errCallback, loadingShow = true, timeout = 60000) {
    type = type.toUpperCase();
    data.HimyAuthorization = window.localStorage.getItem('token');
    let opaction = {
      method: type,
      url: api + url,
      timeout: timeout,
      data: qs.stringify(data)
    };
    showLoad();
    axios(opaction).then((response) => {
      closeLoad();
      retCallback(response.data);
    }, (err) => {
      closeLoad();
      if (!data.HimyAuthorization) {
        if (localStorage.getItem('izZt') === 'true') {
          Vue.$router.replace({path: '/login'});
        }
      }
      errCallback(err.data);
    });

    function showLoad () {
      if (loadingShow) {
        element.Loading.service({
          lock: true,
          background: "rgba(0, 0, 0, 0.5)"
        });
      }
    }

    function closeLoad () {
      if (loadingShow) {
        element.Loading.service({}).close();
      }
    }
  };
};
export default util;
