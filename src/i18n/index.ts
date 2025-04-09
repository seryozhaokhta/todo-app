import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        header: 'Todo List',
        addTodoPlaceholder: 'Add a new task',
        addButton: 'Add',
        removeButton: 'Remove',
        all: 'All',
        active: 'Active',
        completed: 'Completed',
        footer: '© 2024 Todo App',
        clearCompleted: 'Clear Completed',
        toggleLanguage: 'Russian',
        totalTasks: 'Total Tasks',
        completedTasks: 'Completed Tasks',
        completion: 'Completion',
        editButton: 'Edit',
        saveButton: 'Save',
        cancelButton: 'Cancel',
    },
    ru: {
        header: 'Список Задач',
        addTodoPlaceholder: 'Добавить новую задачу',
        addButton: 'Добавить',
        removeButton: 'Удалить',
        all: 'Все',
        active: 'Активные',
        completed: 'Завершённые',
        footer: '© 2024 Приложение «Список дел»',
        clearCompleted: 'Очистить завершённые',
        toggleLanguage: 'Английский',
        totalTasks: 'Всего Задач',
        completedTasks: 'Завершённых Задач',
        completion: 'Выполнено',
        editButton: 'Редактировать',
        saveButton: 'Сохранить',
        cancelButton: 'Отмена',
    },
};

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;
