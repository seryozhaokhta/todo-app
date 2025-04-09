<template>
  <footer class="app-footer">
    <p class="app-footer__text">{{ $t("footer") }}</p>
    <div class="app-footer__stats">
      <div class="app-footer__stat-item">
        <span class="app-footer__label">{{ $t("totalTasks") }}:</span>
        <span class="app-footer__value">{{ totalTasks }}</span>
      </div>
      <div class="app-footer__stat-item">
        <span class="app-footer__label">{{ $t("completedTasks") }}:</span>
        <span class="app-footer__value">{{ completedTasks }}</span>
      </div>
      <div class="app-footer__stat-item">
        <span class="app-footer__label">{{ $t("completion") }}:</span>
        <span class="app-footer__value">{{ completionPercentage }}%</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useTodoStore } from "../stores/todoStore";

const todoStore = useTodoStore();

const totalTasks = computed(() => todoStore.todos.length);
const completedTasks = computed(
  () => todoStore.todos.filter((todo) => todo.completed).length
);
const completionPercentage = computed(() => {
  if (totalTasks.value === 0) return 0;
  return Math.round((completedTasks.value / totalTasks.value) * 100);
});
</script>

<style scoped>
.app-footer {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #999;
  padding: 0 20px;
}

.app-footer__stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.app-footer__stat-item {
  display: flex;
  align-items: center;
}

.app-footer__label {
  font-weight: bold;
  margin-right: 5px;
}

.app-footer__value {
  color: #333;
}

@media (max-width: 600px) {
  .app-footer__stats {
    flex-direction: column;
    gap: 10px;
  }

  .app-footer__stat-item {
    justify-content: center;
    font-size: 16px;
  }

  .app-footer__text {
    font-size: 16px;
  }
}
</style>
