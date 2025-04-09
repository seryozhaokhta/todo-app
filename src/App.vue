<template>
  <div class="app">
    <AppHeader />
    <AppFilters />
    <AppAddTodo />
    <router-view />
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useTodoStore } from "./stores/todoStore";
import AppHeader from "./components/AppHeader.vue";
import AppFilters from "./components/AppFilters.vue";
import AppAddTodo from "./components/AppAddTodo.vue";
import AppFooter from "./components/AppFooter.vue";

const todoStore = useTodoStore();

onMounted(() => {
  todoStore.initializeTodos();
});
</script>

<style src="./style.css"></style>
