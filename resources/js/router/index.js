import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

/* Guest Component */
const Login = () => import('../pages/auth/Login.vue');
const Register = () => import('../pages/auth/Register.vue');
/* Guest Component */

/* Layouts */
const DahboardLayout = () => import('../pages/layout/Layout.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('../pages/app/Dashboard.vue')
/* Authenticated Component */

const Routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`
        }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
    {
        path: "/",
        component:DahboardLayout,
        meta: {
            middleware: "auth"
        },
        children:[
            {
                name: "dashboard",
                path: '/',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            }
        ]
    }
]

var router  = new VueRouter({
    mode: 'history',
    routes: Routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`
    if(to.meta.middleware == "guest") {
        if(store.state.auth.authenticated) {
            next({name: "dashboard"})
        }
        next()
    } else {
        if(store.state.auth.authenticated){
            next()
        } else {
            next({name: "login"})
        }
    }
})

export default router
