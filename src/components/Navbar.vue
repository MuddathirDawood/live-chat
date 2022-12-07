<template>
    <nav v-if="user">
        <div>
            <p>Hey There {{user.displayName}}</p>
            <p class="email">Currently logged in as {{user.email}}</p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>
</template>

<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser'
import { async } from '@firebase/util';

    export default {
        setup(){
           const {error, logout} = useLogout()
           const {user} = getUser()

           const handleClick = async() => {
            await logout()
            if (!error.value) {
                console.log('User Logged Out');
            }
           }

           return { handleClick, user}
        }
    }
</script>

<style>

</style>