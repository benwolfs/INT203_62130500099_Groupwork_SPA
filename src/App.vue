<template>
  <div id="nav" class="h-12 bg-blue-800 bg-opacity-40 fixed w-screen z-10">
    <div class="flex justify-end items-center text-white text-xl space-x-8 px-8 py-2 w-full font-serif">
    <router-link to="/">Home</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/member">Member</router-link>
    </div>
  </div>

  <div class="w-full h-full bg-red-20 bg-no-repeat bg-center fixed" style="background-image: url(https://images8.alphacoders.com/632/thumb-1920-632051.png)"></div>
  <router-view class="h-screen relative"/>

</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
} */
</style>

