import axios from 'axios';
import router from '../router';

export default {
    namespaced: true,
    state: {
        authenticated: false,
        user: {}
    },
    mutations: {
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },
        SET_USER (state, value) {
            state.user = value
        }
    },
    actions: {
        login({commit}, data) {
            commit('SET_USER', data)
            commit('SET_AUTHENTICATED', true)
            router.push({name: 'dashboard'})
        },
        logout({commit}) {
            commit('SET_USER', {})
            commit('SET_AUTHENTICATED', false)
        }
    }
}
