<template>
    <section>
    <ul>
      <!-- v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" -->

      <li class="shadow">
        <!-- v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)" -->
        <i class="checkBtn fas fa-check"></i>
        <!-- <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span> -->
        <span calss = ".textCompleted" >1</span>
        <!-- <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"> -->
          <span class="removeBtn">
          <i class="removeBtn fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {

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

