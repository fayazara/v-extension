<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <carbon-settings class="icon-btn mx-2 text-2xl" />
    <div>Options</div>
    <p class="my-2 opacity-50">This is the options page</p>

    <input
      id="input"
      v-model="storageDemo"
      placeholder="Sync Storage Message"
      type="text"
      class="px-4 py-2 w-[250px] rounded-lg text-center bg-transparent border border-gray-200 dark:border-gray-700 outline-none active:outline-none"
    />

    <Footer />

    <div class="mt-4 flex items-center space-x-2 justify-center">
      <span> Powered By Vite </span>
      <pixelarticons-zap class="inline-block" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { storageDemo } from "~/logic/storage";
</script>
