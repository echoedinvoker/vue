export default {
  // requests(state) {
  requests(state, _, _2, rootGetters) {
    // return state.requests;
    const coachId = rootGetters.userId;
    // return state.requests;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    // return state.requests && state.requests.length > 0;
    return getters.requests && getters.requests.length > 0;
  },
};
