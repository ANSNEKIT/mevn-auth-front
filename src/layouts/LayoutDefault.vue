<template>
    <div class="layout-default w-100 h-100 min-h-screen min-w-full">
        <TheHeader />

        <main class="main w-100 h-100 min-h-screen min-w-full">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<style scoped>
.layout-default {
    display: flex;
    flex-direction: column;
}

.main {
    margin-top: 50px;
    width: 100%;
}
</style>
