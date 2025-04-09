<template>
  <div class="app-add-todo">
    <input
      v-model="newTodo"
      :placeholder="$t('addTodoPlaceholder')"
      @keyup.enter="addNewTodo"
      class="app-add-todo__input"
    />
    <button class="app-add-todo__button" @click="addNewTodo">
      {{ $t("addButton") }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTodoStore } from "../stores/todoStore";

const newTodo = ref<string>("");
const todoStore = useTodoStore();

const addNewTodo = () => {
  const trimmed = newTodo.value.trim();
  if (trimmed) {
    todoStore.addTodo(trimmed);
    newTodo.value = "";
  }
};
</script>

<style scoped>
.app-add-todo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
}

.app-add-todo__input {
  padding: 10px 15px;
  border: 2px solid #ccc;
  border-radius: 4px;
  flex: 1;
  font-size: 1em;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.app-add-todo__input:focus {
  border-color: #646cff;
  box-shadow: 0 0 5px rgba(100, 108, 255, 0.5);
  outline: none;
}

.app-add-todo__button {
  margin-left: 10px;
  padding: 10px 15px;
  font-size: 1em;
  border: none;
  background-color: #646cff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.app-add-todo__button:hover {
  background-color: #535bf2;
}
</style>
