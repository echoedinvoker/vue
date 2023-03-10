export default {
  setAuth(state, payload) {
    state.authenticated = payload.isAuth;
  },
};
