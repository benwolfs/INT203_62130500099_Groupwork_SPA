<template>
  <div class="form w-2/6 mx-auto pt-14">
    <form>
      <base-card class="space-y-5 flex flex-col">
      <div v-if="ifShowForm" class="flex flex-row justify-end">
        <span class="text-right my-auto text-red-600 text-xl cursor-pointer" @click="deleteForm">Delete Information</span>
      <img src="../../assets/cross.png" class="w-10 h-10 ml-3 cursor-pointer" @click="deleteForm" />
      </div>
        <div class="mx-auto mt-5">
          <div v-if="ifShowForm">
            <img :src="memberShow.Img" class="w-52 ml-6" />
          </div>
          <div v-else>
          <img :src="imgSrc" class="w-52 ml-6" />
          <input
            type="file"
            class="ml-6 mt-4 w-52 focus:outline-none"
            @change="uploadImg"
          />
          </div>
        </div>

        <div class="flex flex-col">
          <label class="label" for="name">First Name: </label>

          <div v-if="ifShowForm" class="w-full h-6 bg-white">
            {{memberShow.Fname}}
          </div>
          <input v-else
            class="input"
            :class="{ 'bg-red-50': FNameInput }"
            id="name"
            type="text"
            v-model.trim="enterFName"
          />
        </div>

        <p v-if="FNameInput" class="text-red-500">
          Please enter your First Name!
        </p>

        <div class="flex flex-col">
          <label class="">Last Name: </label>

          <div v-if="ifShowForm" class="w-full h-6 bg-white">
            {{memberShow.Lname}}
          </div>
          <input v-else
            class="input"
            :class="{ 'bg-red-50': LNameInput }"
            id="name"
            type="text"
            v-model.trim="enterLName"
          />
        </div>

        <p v-if="LNameInput" class="text-red-500">
          Please enter your Last Name!
        </p>

        <div class="flex flex-col">
          <label class="">Email Address: </label>

          <div v-if="ifShowForm" class="w-full h-6 bg-white">
            {{memberShow.Mname}}
          </div>
          <input v-else
            class="input"
            :class="{ 'bg-red-50': MNameInput }"
            id="name"
            type="text"
            v-model.trim="enterMail"
          />
        </div>

        <p v-if="MNameInput" class="text-red-500">
          Please enter your Email Address!
        </p>

  

        <div class="flex flex-col">
          <label for="position">Position Applying For </label>
          <div v-if="ifShowForm" class="w-full h-6 bg-white">
            {{memberShow.Pname}}
          </div>
          <select id="nposition" name="poslist" v-model="selectPos" v-else>
            <option v-for="pos in posArray" :key="pos.id">
              {{pos.name}}
            </option>
          </select>
        </div>

        <p v-if="PInput" class="text-red-500">
          Please enter your Position Applying!
        </p>

        <div class="flex flex-col">
          <label class="">Additional Information </label>

        <div v-if="ifShowForm" class="w-full h-40 bg-white ">
          {{memberShow.AddForm}}
        </div>
          <textarea class="input h-40" id="name" v-model.trim="enterInform" v-else/>
        </div>

        <div class="flex flex-row">
          <router-link :to="ifShowForm||ifEdit? '/member' : '/'">
            <base-button
              @click="clearForm"
              bgcolor="bg-blue-600"
              txtcolor="text-white"
              txtonbutt = "Back"
            ></base-button>
          </router-link>

          <div class="flex-grow"></div>

          <base-button
            @click.prevent="submitForm"
            bgcolor="bg-blue-600"
            txtcolor="text-white"
            :txtonbutt ="ifShowForm? 'Edit' : 'Apply' "
          ></base-button>
        </div>
      </base-card>
    </form>
  </div>
</template>

<script>
export default {
  emit: ["send-regist","if-show","send-edit","send-delete"],
  props:["memberShow","ifShowForm"],
  data() {
    return {
      imgSrc: require("../../assets/addPic.png"),
      enterFName: "",
      enterLName: "",
      enterMail: "",
      selectPos: "",
      enterInform: "",
      FNameInput: false,
      LNameInput: false,
      MNameInput: false,
      PInput: false,
      posArray: [],
      ifEdit: false
    };
  },
  methods: {
    checkForm() {
      this.FNameInput = this.enterFName === "" ? true : false;
      this.LNameInput = this.enterLName === "" ? true : false;
      this.MNameInput = this.enterMail === "" ? true : false;
      this.PInput = this.selectPos === "" ? true : false;
    },
    uploadImg(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imgSrc = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitForm() {
      if(!this.ifShowForm){
        this.checkForm();
      }
      if(this.ifEdit == false && this.ifShowForm == true){
        this.onEdit();
      }
      else if (
        !this.FNameInput &&
        !this.LNameInput &&
        !this.MNameInput &&
        !this.PInput &&
        !this.ifEdit
      ) {
        this.$emit("send-regist", {
          Img: this.imgSrc,
          Fname: this.enterFName,
          Lname: this.enterLName,
          Mname: this.enterMail,
          Pname: this.selectPos,
          AddForm: this.enterInform,
        });
        this.clearForm();
        alert("Register Already");
      }else{
         this.$emit("send-edit", {
          Img: this.imgSrc,
          Fname: this.enterFName,
          Lname: this.enterLName,
          Mname: this.enterMail,
          Pname: this.selectPos,
          AddForm: this.enterInform,
          id: this.memberShow.id
        });
        this.clearForm();
        alert("Edit Already!!!");
      }
    },
    deleteForm(){
      this.$emit("send-delete",this.memberShow)
      alert("Delete now");
       this.clearForm();
    },
     clearForm() {
      this.imgSrc = require("../../assets/addPic.png");
      this.enterFName = "";
      this.enterLName = "";
      this.enterMail = "";
      this.selectPos = "";
      this.enterInform = "";
      this.$emit("if-show",false)
    },
    onEdit(){
      this.ifEdit = true;
      this.$emit("if-show",true)
      this.imgSrc = this.memberShow.Img;
      this.enterFName = this.memberShow.Fname;
      this.enterLName = this.memberShow.Lname;
      this.enterMail = this.memberShow.Mname;
      this.selectPos = this.memberShow.Pname;
      this.enterInform = this.memberShow.AddForm;
    },
    async fetch() {
      const res = await fetch('http://localhost:5000/position') //อ่านไฟล์jsonจากpathที่เราใส่
      const data = await res.json() //เอาไฟล์jsonจากpathเราใส่มาแปลงเป็น javascript object
      return data
    }
  },
    async created() {
      this.posArray = await this.fetch() //เอาjava script object ที่แปลงมาจาก method fetch มาเก็บไว้ในตัวแปรposArrayที่เราสร้าง
  }
};
</script>