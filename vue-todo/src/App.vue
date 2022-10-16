<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-footer></todo-footer>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';


export default {

  components:{
    'todo-header' : TodoHeader,
    'todo-footer' : TodoFooter,
    'todo-input' : TodoInput,
    'todo-list' : TodoList,
  }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #F6f6f6;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
  }
</style>