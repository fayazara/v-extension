<template>
  <nav class="px-2 py-1.5 border-b flex items-center space-x-0.5 w-full">
    <RouterLink to="/" class="nav-link">
      <HeroiconsHome />
      <span class="ml-1">Home</span>
    </RouterLink>
    <RouterLink to="/settings" class="nav-link">
      <HeroiconsCog6Tooth />
      <span class="ml-1">Settings</span>
    </RouterLink>
    <div class="flex-1"></div>
    <RouterLink to="/about" class="nav-link">
      <HeroiconsUser />
    </RouterLink>
  </nav>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.nav-link {
  @apply flex items-center p-1 rounded-md text-slate-500;
}
.router-link-exact-active {
  @apply bg-indigo-50 text-indigo-600;
}
</style>
