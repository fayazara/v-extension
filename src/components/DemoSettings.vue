<template>
  <div class="p-2">
    <p class="text-base">Settings</p>
    <ul class="mt-2 p-1 bg-slate-50 border rounded-lg divide-y">
      <li class="p-2">
        <div class="flex items-center justify-between">
          <p>Dark Mode</p>
          <div class="relative">
            <input type="checkbox" class="peer sr-only opacity-0" id="toggle" />
            <label
              for="toggle"
              class="relative flex h-5 w-9 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-4 before:w-4 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
            >
              <span class="sr-only">Enable</span>
            </label>
          </div>
        </div>
      </li>
      <li class="p-2">
        <div class="flex items-center justify-between">
          <p>Airplane Mode</p>
          <div class="relative">
            <input type="checkbox" class="peer sr-only opacity-0" id="toggle" />
            <label
              for="toggle"
              class="relative flex h-5 w-9 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-4 before:w-4 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
            >
              <span class="sr-only">Enable</span>
            </label>
          </div>
        </div>
      </li>
      <li class="p-2">
        <div class="flex items-center justify-between">
          <p>VPN</p>
          <div class="relative">
            <input type="checkbox" class="peer sr-only opacity-0" id="toggle" />
            <label
              for="toggle"
              class="relative flex h-5 w-9 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-4 before:w-4 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
            >
              <span class="sr-only">Enable</span>
            </label>
          </div>
        </div>
      </li>
      <li class="p-2">
        <div class="flex items-center justify-between">
          <p>Notifications</p>
          <div class="relative">
            <input type="checkbox" class="peer sr-only opacity-0" id="toggle" checked/>
            <label
              for="toggle"
              class="relative flex h-5 w-9 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-4 before:w-4 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
            >
              <span class="sr-only">Enable</span>
            </label>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup></script>
<style scoped></style>
