import { AA } from '../mutation-types';

// 1.创建state
const state = {
  name: 'YZG',
  phone: '18346864586',
  pwd: '123456'
};

const actions = {
  changeName ({ commit }, data){
    commit(AA.Name, data.data);
    setTimeout(() => {
      const aa = "123";
      data.cb(aa);
    }, 1000);
  },
  changePhone ({ commit }, data, cb){
    commit(AA.PHONE, data);
    setTimeout(() => {
      const aa = "321";
      cb(aa);
    });
  }
};
const mutations = {
  [AA.Name] (state, name){
    state.name = name;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
