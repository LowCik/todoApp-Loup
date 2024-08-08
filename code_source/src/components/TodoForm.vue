<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/stores/todoList";

const todo = ref("");
const store = useTodoListStore();

function addItemAndClear(item) {
  if (item.length === 0) {
    alert("You didn't type in anything");
    return;
  }
  store.addTodo(item);
  todo.value = "";
}
</script>

<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
      <input v-model="todo" type="text" placeholder="Add something to do..." />
      <button>Add</button>
    </form>
  </div>
</template>

<style scoped>
form {
  margin-bottom: 15px;
}
input {
  margin-top: 25px;
  margin-bottom: 15px;
  height: 2rem;
  width: 50%;
}
button {
  margin-left: 30px;
  background-color: #2f6089;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  color: white;
  width: 15%;
  height: 2rem;
}
</style>
