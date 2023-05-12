<template>
  <main class="w-[400px]">
    <Navbar />
    <div class="h-80 overflow-y-scroll">
      <RouterView />
    </div>
    <Footer />
  </main>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
