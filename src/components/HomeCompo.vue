<template>
  <div class="hello flex items-center justify-center flex-col h-screen">
    <h1 class="text-8xl text-white mb-12 -mt-12 font-serif">{{ msg }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>