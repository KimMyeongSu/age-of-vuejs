<template>
  <div class="inputBox shadow" >
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
      <PopModal v-if="showModal" @close="showModal = false">
        <h3 slot="header">custom header</h3>
      </PopModal>
  </div>
</template>

<script>
import PopModal from './common/popModal.vue';

export default {
  created(){  
  },
  data(){
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  methods:{
    addTodo(){
      if(this.newTodoItem !==''){
        this.$emit('addTodoItem',this.newTodoItem)
        this.claerInput();
      }   
    },
    claerInput(){
      this.newTodoItem= null;
    },
  },
  components: {
    PopModal
  }
}
</script>

<style>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>