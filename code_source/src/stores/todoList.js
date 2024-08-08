import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false });
      this.persistToLocalStorage();
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId;
      });
      this.persistToLocalStorage();
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
      this.persistToLocalStorage();
    },
    persistToLocalStorage() {
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
  },
});
