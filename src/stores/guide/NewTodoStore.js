import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTodos = defineStore("todos", () => {
  // State
  const todos = ref([]);
  const filter = ref("all");
  const nextId = ref(0);

  // Getters
  const finishedTodos = computed(() =>
    todos.value.filter((todo) => todo.isFinished)
  );
  const unfinishedTodos = computed(() =>
    todos.value.filter((todo) => !todo.isFinished)
  );

  const filteredTodos = computed(() => {
    if (filter.value === "finished") {
      return finishedTodos.value;
    } else if (filter.value === "unfinished") {
      return unfinishedTodos.value;
    }
    return todos.value;
  });

  // Actions
  function addTodo(text) {
    todos.value.push({ text, id: nextId.value++, isFinished: false });
  }

  return {
    todos,
    filter,
    nextId,
    finishedTodos,
    unfinishedTodos,
    filteredTodos,
    addTodo,
  };
});
