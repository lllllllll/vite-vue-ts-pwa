import axios from 'axios'
const url = import.meta.env.VITE_APP_BASE_API
export default {
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
    getUsers: (state: any) => state.users
  },
  mutations: {
    SET_USERS(state: { users: [] }, payload: any) {
      state.users = payload
    },
  },
  actions: {
    getUsers({ commit }: any) {
      axios.get(`${url}/users`)
        .then(res => commit('SET_USERS', res.data))
    },
  },
}