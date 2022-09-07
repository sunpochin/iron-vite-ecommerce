export default {
  login(context) {
    context.commit('setLoggedIn', { value: true });
  },
  logout(context) {
    context.commit('setLoggedIn', { value: false });
  },
  setProducts(context, payload) {
    context.commit('setProducts', payload);
  },
  setCurProduct(context, payload) {
    context.commit('setCurProduct', payload);
  },
};
