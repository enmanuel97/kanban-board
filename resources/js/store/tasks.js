import axios from 'axios';
import router from '../router';

export default {
    namespaced: true,
    state: {
        tasks: {
            buffer: [],
            working: [],
            done: [],
        }
    },
    mutations: {
        SET_TASKS (state, value) {
            state.tasks = value
        },
        SET_TASK (state, {key, value}) {
            state.tasks[key].push(value)
        }
    },
    actions: {
        setTasks({commit}, value) {
            commit('SET_TASKS', value)
        },
        setTask({commit}, {key, value}) {
            commit('SET_TASK', {key, value})
        },
    }
}
