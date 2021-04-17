<template>
    <div class="PosMem">


        <div class="text-gray-200 flex text-5xl font-serif flex-col">{{posName}}

            <div class="border-t-2 flex flex-row flex-wrap pl-6 bg-blue-400 bg-opacity-20 mt-4 mb-8">
            <div class="" v-for="mem in posMem" :key="mem.id">
                <base-member :mem="mem" @mem-to-pos-mem = "showFormPo"></base-member>
            </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  props: ['posMem', 'posName'],
  emits: ["pos-mem-to-mem"],

  data() {
    return {};
  },
  methods: {
    showFormPo(memtoPos) {
        this.$emit("pos-mem-to-mem", memtoPos )
    },
  },
}
</script>