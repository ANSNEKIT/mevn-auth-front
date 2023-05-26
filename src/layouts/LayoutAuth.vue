<template>
    <div class="layout-login">
        <main class="main">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout-login {
    display: flex;
    flex-direction: column;
}

.main {
    margin-top: 70px;
    width: 100%;
}
</style>
