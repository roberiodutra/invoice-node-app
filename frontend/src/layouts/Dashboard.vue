<template>
  <Sidebar />
  <div class="dashboard-layout">
    <HeaderComponent />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
</script>
