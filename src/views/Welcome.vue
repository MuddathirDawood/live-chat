<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat"/>
      <p>No Account Yet? <span @click="showLogin = false">Signup</span></p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignupForm @signup="enterChat"/>
      <p>Already Registered? <span @click="showLogin = true">Login</span></p>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import SignupForm from '@/components/SignupForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: "Welcome",
    components: { SignupForm, LoginForm },
    setup(){
      const showLogin = ref(true)
      const router  = useRouter()

      const enterChat = () => {
        router.push('/chatroom')
      }

      return { showLogin , enterChat}
    }
}

</script>

<style>
  .welcome{
    text-align: center;
    padding: 20px 0;
  }

  .welcome form{
    width: 300px;
    margin: 20px auto;
  }

  .welcome label{
    display: block;
    margin: 20px 0 20px;
  }

  .welcome input{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #0023ce;
    outline: none;
    color: black;
    margin: 10px auto;
  }

  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    color: white;
  }

  .welcome button{
    margin: 20px auto;
  }

</style>