<template>
    <component :is="layout">
        <RouterView />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import LayoutDefault from './layouts/LayoutDefault.vue'
import { useAuthStore } from './stores/auth'

const router = useRouter()
const authStore = useAuthStore()
if (!authStore.isAuth) {
    router.replace({ name: 'login' })
}
const layout = computed(() => LayoutDefault)
</script>
