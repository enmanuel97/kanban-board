<template>
    <div class="container h-100">
        <div class="row justify-content-center h-100 p7em">
            <div class="col-md-7 col-lg-5">
                <div class="login-wrap p-4 p-md-5">
                    <div class="icon d-flex align-items-center justify-content-center">
                        <span class="bi bi-person-circle"></span>
                    </div>
                    <h3 class="text-center mb-4">Register</h3>
                    <form action="javascript:void(0)" @submit="register" method="post">
                        <div class="form-group">
                            <input type="text" name="name" v-model="user.name" id="name" placeholder="Enter name" class="form-control rounded-left">
                            <div v-if="errors != null && typeof errors['name'] != 'undefined'" style="display: block" class="invalid-feedback">{{errors['name']}}</div>
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="user.email" name="email" id="email" placeholder="Enter email" class="form-control rounded-left">
                            <div v-if="errors != null && typeof errors['email'] != 'undefined'" style="display: block" class="invalid-feedback">{{errors['email']}}</div>
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="user.password" name="password" id="password" placeholder="Enter password" class="form-control rounded-left">
                            <div v-if="errors != null && typeof errors['password'] != 'undefined'" style="display: block" class="invalid-feedback">{{errors['password']}}</div>
                        </div>
                        <div class="form-group">
                            <input type="password" name="password_confirmation" placeholder="Repeat password" v-model="user.password_confirmation" id="password_confirmation" class="form-control rounded-left">
                            <div v-if="errors != null && typeof errors['password_confirmation'] != 'undefined'" style="display: block" class="invalid-feedback">{{errors['password_confirmation']}}</div>
                        </div>
                        <div class="form-group">
                            <button type="submit" :disabled="processing" class="form-control btn btn-primary rounded submit px-3">
                                {{ processing ? "Please wait" : "Register" }}
                            </button>
                        </div>
                        <div class="col-12 text-center">
                            <label>Already have an account? <router-link :to="{name:'login'}">Login Now!</router-link></label>
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
    name: 'register',
    data() {
        return {
            errors: null,
            user: {
                name: "Jesus Enmanuel",
                email: "edelacruz9713@gmail.com",
                password: "123456",
                password_confirmation: "123456"
            },
            processing:false
        }
    },
    methods: {
        ...mapActions({
            signIn: 'auth/login'
        }),
        async register() {
            let [valid, errors] = await validateFormAndGetErrors(this.user);
            if(valid) {
                this.processing = true;
                await axios.post('/api/sign-up', this.user).then(response => {
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
