<template>
    <div class="container h-100">
        <div class="row justify-content-center h-100 p7em">
            <div class="col-md-7 col-lg-5">
                <div class="login-wrap p-4 p-md-5">
                    <div class="icon d-flex align-items-center justify-content-center">
                        <span class="bi bi-person-circle"></span>
                    </div>
                    <h3 class="text-center mb-4">Sign In</h3>
                    <form action="javascript:void(0)" class="login-form" method="post">
                        <div class="form-group">
                            <input type="text" v-model="auth.email" name="email" id="email" placeholder="Enter email" class="form-control rounded-left">
                            <div v-if="errors != null && typeof errors['email'] != 'undefined'" style="display: block" class="invalid-feedback">{{errors['email']}}</div>
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="auth.password" name="password" id="password" placeholder="Enter password" class="form-control rounded-left">
                            <div v-if="errors != null && typeof errors['password'] != 'undefined'" style="display: block" class="invalid-feedback">{{errors['password']}}</div>
                        </div>
                        <div class="form-group">
                            <button type="submit" :disabled="processing" @click="login" class="form-control btn btn-primary rounded submit px-3">
                                {{ processing ? "Please wait" : "Login" }}
                            </button>
                        </div>
                        <div class="col-12 text-center">
                            <label>Do not have an account? <router-link :to="{name: 'register'}">Register!</router-link></label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { validateFormAndGetErrors } from "../../helper";
export default {
    name: "login",
    data() {
        return {
            errors: null,
            auth: {
                email: "edelacruz9713@gmail.com",
                password: "Jesus2313"
            },
            processing: false
        }
    },
    methods: {
        ...mapActions({
            signIn: 'auth/login'
        }),
        async login() {
            let [valid, errors] = await validateFormAndGetErrors(this.auth);
            if(valid) {
                this.processing = true;
                await axios.get('/sanctum/csrf-cookie');
                await axios.post('/api/sign-in', this.auth).then(response => {
                    this.signIn(response.data.user_data);
                }).catch(({response: {data}}) => {
                    alert(data.message);
                }).finally(() => {
                    this.processing = false;
                });
            } else {
                this.errors = errors;
            }
        }
    }
}
</script>
