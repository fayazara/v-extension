<template>
  <div class="">
    <div class="p-2 sticky top-0 bg-white/50 backdrop-blur z-50">
      <input
        type="text"
        name="todo"
        id="todo"
        class="block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Add new todo"
        v-model="newTodo"
        @keyup.enter="addNewTodo"
      />
    </div>
    <div class="divide-y divide-gray-200 border-gray-200">
      <label
        v-for="(todo, i) in todos"
        :key="i"
        class="relative flex items-start p-2 cursor-pointer hover:bg-slate-100 focus-within:bg-slate-100"
        :for="`todo-${todo.id}`"
      >
        <div class="flex h-6 items-center">
          <input
            :id="`todo-${todo.id}`"
            :name="`todo-${todo.id}`"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            :checked="todo.completed"
            v-model="todo.completed"
          />
        </div>
        <div
          class="min-w-0 ml-3 flex-1 text-sm text-slate-600 leading-6"
          :class="todo.completed ? 'line-through text-slate-400' : null"
        >
          <p class="select-none">{{ todo.name }}</p>
        </div>
      </label>
    </div>
    <p class="text-xs px-2 pb-2 text-slate-400 text-center">This is a demo</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const newTodo = ref("");
const todos = ref([
  { id: 1, name: "Work on Github issues", completed: true },
  { id: 2, name: "Procrastinate", completed: false },
  { id: 3, name: "Sleep", completed: false },
  { id: 4, name: "Buy some stocks", completed: false },
  { id: 5, name: "Sleep", completed: false },
]);

const addNewTodo = () => {
  console.log("add new todo", newTodo.value);
  todos.value.unshift({
    id: todos.value.length + 1,
    name: newTodo.value,
    completed: false,
  });
  newTodo.value = "";
};
</script>
<style scoped></style>
