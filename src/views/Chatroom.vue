<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>

<script>
import ChatWindow from '@/components/ChatWindow.vue';
import Navbar from '@/components/Navbar.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import getUser from '@/composables/getUser'
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: { Navbar, NewChatForm, ChatWindow },
    setup(){
        const {user} = getUser()
        const router = useRouter()

        watch(user, () => {
            if (!user.value) {
                router.push('/')
            }
        })

        return { user }
    }
}
</script>

<style>
nav{
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav p{
    margin: 2px auto;
    font-size: 16px;
    color: white;
}

nav p.email{
    font-size: 14px;
    color: #a4a4a4;
}
</style>