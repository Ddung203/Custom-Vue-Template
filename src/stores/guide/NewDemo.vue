<script setup>
  import { ref } from "vue";
  import { useTodos } from "@/stores/todos";

  const store = useTodos();
  const newTodo = ref("");

  const addTodo = () => {
    if (newTodo.value.trim()) {
      store.addTodo(newTodo.value.trim());
      newTodo.value = "";
    }
  };

  const filter = store.filter;
  const filteredTodos = store.filteredTodos;
</script>

<template>
  <div>
    <input
      v-model="newTodo"
      placeholder="Add a new todo"
      @keyup.enter="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="finished">Finished</option>
      <option value="unfinished">Unfinished</option>
    </select>
    <ul>
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
      >
        <input
          type="checkbox"
          v-model="todo.isFinished"
        />
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>
