<template>
  <div class="Register">
    <h1 class="text-gray-200 flex justify-center pt-24 text-7xl font-serif">
      Register
    </h1>
    <base-form @send-regist="regist" :ifShow = "false" />
  </div>
</template>

<script>
export default {
  methods: {
    async regist(newMem) {
      try {
        await fetch("http://localhost:5000/member", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            Img: newMem.Img,
            Fname: newMem.Fname,
            Lname: newMem.Lname,
            Mname: newMem.Mname,
            Pname: newMem.Pname,
            AddForm: newMem.AddForm
          }),
        });
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
  },
};
</script>

