<template>
  <div class="Member">
    <h1 class="text-gray-200 flex justify-center pt-24 text-7xl font-serif">
      Member
    </h1>

    <div
      class="flex justify-center items-center fixed z-10 inset-0 overflow-y-auto"
      v-if="ifEdit || ifShow"
    >
      <base-form
        :member-show="showFormMem"
        :ifShowForm="ifShow"
        @if-show="showToEdit"
        @send-edit="editMember"
        @send-delete="deleteMember"
      ></base-form>
    </div>

    <div v-for="pos in posArray" :key="pos.id">
      <position-member
        :pos-name="pos.name"
        :pos-mem="memInPos(pos.name)"
        @pos-mem-to-mem="realShowForm"
      ></position-member>
    </div>
  </div>
</template>

<script>
import PositionMember from "../components/UI/PositionMember.vue";

export default {
  name: "Position",
  components: {
    PositionMember,
  },
  data() {
    return {
      posArray: [],
      memArray: [],
      send: [],
      urlMem: "http://localhost:5000/member",
      urlPos: "http://localhost:5000/position",
      ifShow: false,
      showFormMem: [],
      ifEdit: false
    };
  },
  methods: {

    memInPos(pname){
      return this.send = this.memArray.filter(m => m.Pname === pname)
    },
    realShowForm(posMemToMem){
      this.ifShow = true;
      this.showFormMem = posMemToMem;

    },
    showToEdit(onEdit){
      if(onEdit){
        this.ifEdit = true;
      }else{
        this.ifEdit = false;
       this.showFormMem = [];
       }
       this.ifShow = false;
       console.log(this.ifShow)
    },
    async deleteMember(memDel){
      try {
        await fetch(`${this.urlMem}/${memDel.id}`, {
          method: 'DELETE'
        })
        this.memArray = this.memArray.filter(
          (m) => m.id !== memDel.id
        )
      } catch (error) {
        console.log(`Could not delete! ${error}`)
      }
    },
    async editMember(editMember){
      try {
        const res = await fetch(`${this.urlMem}/${editMember.id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            Img:    editMember.Img,
            Fname:  editMember.Fname,
            Lname:  editMember.Lname,
            Mname:  editMember.Mname,
            Pname:  editMember.Pname,
            AddForm:editMember.AddForm
          })
        })
        const data = await res.json()
        this.memArray = this.memArray.map((m) =>
          m.id === data.id
            ? { ...m, 
            Img:    data.Img,
            Fname:  data.Fname,
            Lname:  data.Lname,
            Mname:  data.Mname,
            Pname:  data.Pname,
            AddForm:data.AddForm }
            : m
        )
      } catch (error) {
        console.log(`Could not edit! ${error}`)
      }
    },
    async fetch(url){
      const res = await fetch(url)
      const data = await res.json(url)
      return data;
    }
  },
  async created() {
    this.posArray = await this.fetch(this.urlPos);
    this.memArray = await this.fetch(this.urlMem);
  }
}
</script>
