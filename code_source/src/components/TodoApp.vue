<script setup>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
</script>

<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <todo-form />
    <todo-list class="todo-list"/>
  </div>
</template>

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  background-color: #f7f9fc;
  color: #2e4261;
  justify-content: start;
}
</style>
