import { createStore } from 'vuex';

const store = createStore({
  state: {
    message: 'Hiep'
  },
  mutations: {
    setMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  actions: {
    changeMessage({ commit }, newMessage) {
      commit('setMessage', newMessage);
    }
  },
  getters: {
    getMessage: state => state.message
  }
});

export default store;

// export default new Vuex.Store({
//   state: {
//     errors: {
//       username: '',
//       password: '',
//     },
//     product: {
//       username: '',
//       password: '',
//     },
//   },
//   mutations: {
//     updateErrors(state, newErrors) {
//       state.errors = newErrors;
//     },
//     updateProduct(state, newProduct) {
//       state.product = newProduct;
//     },
//   },
//   actions: {
//     validate({ commit, state }) {
//       const newErrors = {
//         username: '',
//         password: '',
//       };
//       if (!state.product.username) {
//         newErrors.username = 'Vui lòng nhập username';
//       }

//       commit('updateErrors', newErrors);
//     },
//   },
// });
