<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="Email" v-model="email">
        <input type="password" required placeholder="Password" v-model="password">
        <div class="error">{{error}}</div>
        <button>Log In</button>
    </form>
</template>

<script>
import {ref} from 'vue'
import useLogin from '@/composables/useLogin'
import { async } from '@firebase/util'

    export default {
        setup(props, context){
            const {error, login} = useLogin()

            // REFS
            const email = ref('')
            const password = ref('')

            const handleSubmit = async () => {
                await login(email.value, password.value)
                if (!error.value){
                    console.log('User Logged In');
                    context.emit('login')
                }
            }

            return {email, password, handleSubmit, error}
        }
    }
</script>

<style>

</style>