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
        SET_TASKS_BY_TYPE (state, {key, value}) {
            state.tasks[key] = value;
        },
        SET_TASK (state, {key, value}) {
            state.tasks[key].push(value)
        },
        UPDATE_TASK (state, {key, value}) {
            let task = state.tasks[key].filter(task => task.id === value.id)[0];
            Object.assign(task, value);
        },
    },
    actions: {
        setTasks({commit}, value) {
            commit('SET_TASKS', value)
        },
        setTasksByType({commit}, {key, value}) {
            commit('SET_TASKS_BY_TYPE', {key, value})
        },
        setTask({commit}, {key, value}) {
            commit('SET_TASK', {key, value})
        },
        updateTask({commit}, {key, value}) {
            commit('UPDATE_TASK', {key, value})
        },
    }
}
