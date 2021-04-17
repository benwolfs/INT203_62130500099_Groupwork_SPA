<template>
  <button class="w-36 h-12 rounded-lg text-white text-3xl" :class="[bgcolor, txtcolor]">
    {{ txtonbutt }}
  </button>
</template>
<script>
export default {
  props: ['bgcolor', 'txtcolor', 'txtonbutt']
}
</script>