<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- 하위컴포넌트에서 emit 으로 올려준 이벤트에 반환값이 자동으로 여기서 호출되는 함수로 넘겨짐 
    지금은 단일데이터라서 그냥 바로 데이터로 보내지만 object로 받아서 상위컴포넌트에서 가공해서 사용가능
    -->
    <TodoInput @addTodoItem="addOneItem"></TodoInput>
    <TodoList :listTodoItems="todoItems" 
      @removeItem="removeOneItem" 
      @toggleClick="toggleOneItem"></TodoList>
    <TodoFooter @clearLocalStorge="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoItem){
      let obj = {
        completed: false,
        item: todoItem
      };
      localStorage.setItem(todoItem,JSON.stringify(obj)); //localStorage에 할일 추가 
      this.todoItems.push(obj);
    },
    removeOneItem: function(targetItem,index){
      console.log(`targetItem = ${targetItem.item}`);
      localStorage.removeItem(targetItem.item); //localStorage에서 삭제
      this.todoItems.splice(index,1); // todoItem 배열에서 삭제
    },
    toggleOneItem: function(targetItem,index){
      // targetItem.completed = !targetItem.completed;
      // 전달받은 값에 조작을 가하지않고, 해당 컴포넌트에 데이터로 접근해서 데이터 가공 
      // 강의에서는 이렇게 사용해서 그렇지 아래처럼 처리하면, index만 받아와서도 처리가능해 보인다.
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(targetItem.item);
      localStorage.setItem(targetItem.item,JSON.stringify(targetItem));
    },
    clearAll: function(){
      localStorage.clear();
      // location.reload(); // reload 없이 그냥 해당 데이터만 비워주면 됌
      this.todoItems='';
    }
  },
  created: function() {
    if(localStorage.length > 0) {
          for(let i =0; i <localStorage.length; i++){
            if(localStorage.key(i) != 'loglevel:webpack-dev-server')
            this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          }
        }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  }  
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
