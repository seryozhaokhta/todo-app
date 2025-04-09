<template>
  <header class="app-header">
    <h1 class="app-header__title">{{ $t("header") }}</h1>
    <button class="app-header__language-button" @click="toggleLanguage">
      {{ toggleButtonText }}
    </button>
  </header>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === "en" ? "ru" : "en";
};

const toggleButtonText = computed(() => {
  return t("toggleLanguage");
});
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 20px;
}

.app-header__title {
  font-size: 2em;
  margin: 0;
  padding-bottom: 10px;
}

.app-header__language-button {
  padding: 10px 15px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-size: 1em;
}

.app-header__language-button:hover {
  background-color: #e0e0e0;
}

@media (max-width: 600px) {
  .app-header {
    flex-direction: column;
    align-items: center;
    padding: 15px 20px;
  }

  .app-header__language-button {
    margin-top: 10px;
    width: 100%;
    max-width: 200px;
  }

  .app-header__title {
    text-align: center;
    padding-bottom: 15px;
  }
}
</style>
