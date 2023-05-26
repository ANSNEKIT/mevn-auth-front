<script setup lang="ts">
import { onMounted, ref } from 'vue';

console.log('[App.vue]', `Hello world from Electron ${process.versions.electron}!`);
</script>

<template>
	<h1>App running Electron + Vite + Vue 3</h1>
</template>
