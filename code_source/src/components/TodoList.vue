<script setup>
import { useTodoListStore } from "@/stores/todoList";
import { storeToRefs } from "pinia";
import AnimatedTrashBin from "./AnimatedTrashBin.vue";
import CheckMark from "./CheckMark.vue";

const store = useTodoListStore();

const { todoList } = storeToRefs(store);

const { toggleCompleted, deleteTodo, persistToLocalStorage } = store;
</script>

<template>
  <TransitionGroup name="todo-list">
    <div v-for="todo in todoList" :key="todo.id" class="item">
      <div class="content">
        <input
          v-model="todo.item"
          :class="{ completed: todo.completed }"
          class="todo-item__list"
          @keyup="persistToLocalStorage()"
        />
        <div class="action_buttons">
          <span @click.stop="deleteTodo(todo.id)" class="alert">
            <AnimatedTrashBin />
          </span>
          <span @click.stop="toggleCompleted(todo.id)"><CheckMark /></span>
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>

<style scoped>
.action_buttons {
  padding-top: 10px;
}
.todo-item__list {
  border: none;
  background-color: rgba(240, 255, 255, 0);
  width: 70%;
}
.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.5s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
span {
  margin: 0 10px;
  cursor: pointer;
}
.item {
  display: flex;
  justify-content: center;
}
.content > span {
  max-width: 90%;
  overflow: hidden;
}

.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  border: 1px grey solid;
}

.completed {
  text-decoration: line-through;
  color: rgb(230, 22, 22);
}
.alert {
  color: #d1495b;
  font-size: 1em;
  font-weight: 600;
}
</style>
