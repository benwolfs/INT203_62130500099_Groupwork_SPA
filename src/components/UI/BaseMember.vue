<template>
  <div class="baseMem">
    <div class="mx-16 my-12 text-2xl font-serif text-center">
      <img :src="mem.Img" class="w-60 mb-3 pt-8" @click="showForm" />
      {{ mem.Fname }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["mem"],
  emits: ["mem-to-pos-mem"],

  data() {
    return {};
  },
  methods: {
    showForm() {
        this.$emit("mem-to-pos-mem", this.mem )
    },
  },
};
</script>