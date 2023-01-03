<template>
  <aside :class="`${displaySidebar ? 'is-sidebar-expanded' : ''} sidebar`">
    <div class="logo">
      <img
        :src="logoURL"
        alt="logo-icon"
        :class="`${displaySidebar ? 'logo-name' : 'logo-icon'}`"
      >
    </div>

    <div class="sidebar-toggle-wrap">
      <button
        class="sidebar-toggle"
        @click="toggleSidebar"
      >
        <i class="fa-solid fa-bars" />
      </button>
    </div>

    <div class="menu">
      <RouterLink
        to="/orders"
        class="button"
      >
        <i class="fa-regular fa-handshake" />
        <span v-if="displaySidebar">Notas Fiscais</span>
      </RouterLink>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import logoURL from '../assets/logo-cashforce.svg';

const displaySidebar = ref(localStorage.getItem("displaySidebar") === "true");

const toggleSidebar = () => {
	displaySidebar.value = !displaySidebar.value;
	localStorage.setItem("displaySidebar", String(displaySidebar.value));
};
</script>
