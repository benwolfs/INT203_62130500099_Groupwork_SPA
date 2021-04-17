<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <home-compo msg="SAO Company"><router-link to="/register"><base-button txtonbutt = "Register" class="bg-purple-600 hover:bg-purple-700"></base-button></router-link></home-compo>
  </div>
  
</template>

<script>
import HomeCompo from '../components/HomeCompo.vue'
// import BaseButton from '../components/UI/BaseButton.vue'

export default {
  name: 'Home',
  components: {
    HomeCompo
  },
}
  
  </script>
