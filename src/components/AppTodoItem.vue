<template>
  <li :class="['todo-item', { 'todo-item--completed': todo.completed }]">
    <div class="todo-item__view">
      <!-- ЧЕКБОКС для отметки выполнения -->
      <input
        type="checkbox"
        class="todo-item__checkbox"
        :checked="todo.completed"
        @change="toggleComplete"
      />
      <!-- Если не редактируем, показываем текст -->
      <span v-if="!isEditing" class="todo-item__text">{{ todo.text }}</span>
      <!-- Если редактируем, показываем поле ввода -->
      <div v-else class="todo-item__edit">
        <input
          v-model="editedText"
          @keyup.enter="saveEdit"
          @blur="saveEdit"
          class="todo-item__input"
        />
      </div>

      <!-- Кнопки справа -->
      <div class="todo-item__buttons">
        <button class="todo-item__button" @click="enableEditing">
          {{ $t("editButton") }}
        </button>
        <!-- Кнопка удаления видна только если задача выполнена -->
        <button
          v-if="todo.completed"
          class="todo-item__button"
          @click="removeTodo"
        >
          {{ $t("removeButton") }}
        </button>
      </div>
    </div>

    <!-- Если редактируем, выносим кнопки "Сохранить" и "Отмена" отдельно -->
    <div v-if="isEditing" class="todo-item__editing-controls">
      <button class="todo-item__button" @click="saveEdit">
        {{ $t("saveButton") }}
      </button>
      <button class="todo-item__button" @click="cancelEdit">
        {{ $t("cancelButton") }}
      </button>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Todo } from "../types/Todo";

const props = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  (e: "remove", id: string): void;
  (e: "toggle", id: string): void;
  (e: "update", id: string, newText: string): void;
}>();

const isEditing = ref(false);
const editedText = ref(props.todo.text);

// Удалить задачу
const removeTodo = () => {
  emit("remove", props.todo.id);
};

// Тоггл «выполнено/не выполнено»
const toggleComplete = () => {
  emit("toggle", props.todo.id);
};

// Перейти в режим редактирования
const enableEditing = () => {
  isEditing.value = true;
};

// Сохранить изменения
const saveEdit = () => {
  const trimmed = editedText.value.trim();
  if (trimmed && trimmed !== props.todo.text) {
    emit("update", props.todo.id, trimmed);
  }
  isEditing.value = false;
};

// Отменить редактирование
const cancelEdit = () => {
  editedText.value = props.todo.text;
  isEditing.value = false;
};
</script>

<style scoped>
.todo-item {
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
}

/* Зачёркивание текста для выполненных задач */
.todo-item--completed .todo-item__text {
  text-decoration: line-through;
  color: #999;
}

.todo-item__view {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* Собственно чекбокс */
.todo-item__checkbox {
  margin-right: 10px;
  transform: scale(1.3);
  cursor: pointer;
}

/* Текст задачи */
.todo-item__text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 10px;
}

/* Область для кнопок (Edit, Remove) */
.todo-item__buttons {
  display: flex;
  gap: 5px;
}

.todo-item__button {
  padding: 5px 10px;
  font-size: 0.9em;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.3s;
}
.todo-item__button:hover {
  background-color: #e0e0e0;
}

/* Поле ввода при редактировании */
.todo-item__edit {
  flex: 1;
  margin-right: 10px;
}

.todo-item__input {
  padding: 8px 12px;
  border: 2px solid #ccc;
  border-radius: 4px;
  flex: 1;
  font-size: 1em;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.todo-item__input:focus {
  border-color: #646cff;
  box-shadow: 0 0 5px rgba(100, 108, 255, 0.5);
  outline: none;
}

/* Кнопки (Сохранить, Отмена) при редактировании */
.todo-item__editing-controls {
  display: flex;
  gap: 5px;
  margin-top: 10px;
}

@media (max-width: 600px) {
  .todo-item__view {
    flex-direction: column;
    align-items: flex-start;
  }
  .todo-item__buttons {
    margin-top: 10px;
  }
  .todo-item__button {
    width: 100%;
    max-width: 200px;
  }
  .todo-item__edit {
    width: 100%;
    margin: 10px 0;
  }
  .todo-item__input {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
