<template>
    <div class="layout-default">
        <header>Header</header>

        <main class="main">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout-default {
    display: flex;
    flex-direction: column;
}

.main {
    margin-top: 70px;
    width: 100%;
}
</style>
