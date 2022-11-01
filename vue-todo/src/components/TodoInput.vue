<template>
  <div class="inputBox shadow" >
    <!--input "newTodoItem"  동기화 할수 있도록 data와 메서드에서 localStoraeg 에 추가 -->
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  created(){  
  },
  data(){
    return {
      newTodoItem: "",
    }
  },

  methods:{
    addTodo: function(){
      if(this.newTodoItem !==''){
        
      }
      let itemObj = {
        complete: false,
        item: this.newTodoItem,
      }
      localStorage.setItem(this.newTodoItem,JSON.stringify(itemObj)); //Storage.setItem(keyName, keyValue) 
      this.claerInput();
      location.reload();
    },
    claerInput: function(){
      this.newTodoItem= null;
    },
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