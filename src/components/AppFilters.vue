<template>
  <div class="app-filters">
    <router-link to="/all" class="app-filters__link">
      <button
        :class="[
          'app-filters__button',
          { 'app-filters__button--active': currentFilter === 'all' },
        ]"
      >
        {{ $t("all") }}
      </button>
    </router-link>
    <router-link to="/active" class="app-filters__link">
      <button
        :class="[
          'app-filters__button',
          { 'app-filters__button--active': currentFilter === 'active' },
        ]"
      >
        {{ $t("active") }}
      </button>
    </router-link>
    <router-link to="/completed" class="app-filters__link">
      <button
        :class="[
          'app-filters__button',
          { 'app-filters__button--active': currentFilter === 'completed' },
        ]"
      >
        {{ $t("completed") }}
      </button>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentFilter = computed(() => {
  return route.meta.filter as "all" | "active" | "completed";
});
</script>

<style scoped>
.app-filters {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.app-filters__link {
  text-decoration: none;
}

.app-filters__button {
  margin-right: 5px;
  padding: 10px 15px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s, font-weight 0.3s;
  font-size: 1em;
}

.app-filters__button--active {
  font-weight: bold;
  background-color: #d3d3d3;
}

.app-filters__button:hover {
  background-color: #e0e0e0;
}

@media (max-width: 600px) {
  .app-filters {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .app-filters__button {
    width: 100%;
    max-width: 200px;
    margin: 5px 0;
  }
}
</style>
