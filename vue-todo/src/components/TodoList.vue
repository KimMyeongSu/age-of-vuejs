<template>
    <section>
    <ul>
      <li class="shadow" v-for="(todoItem,index) in this.$store.state.todoItems" :key="index">
        <i class="checkBtn fas fa-check"  
        :class="{checkBtnCompleted: todoItem.completed}" 
        @click="toggleComplete(todoItem, index)"></i>
        <span :class="{textCompleted: todoItem.completed}" >{{todoItem.item}}</span>
          <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <i class="removeBtn fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['listTodoItems'],
  methods: {
    removeTodo(todoItem,index){ this.$emit('removeItem',todoItem,index) },
    toggleComplete(todoItem,index){ this.$emit('toggleClick',todoItem,index) },
  },
}

</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>

