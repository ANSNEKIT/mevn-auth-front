<template>
    <component :is="layout">
        <RouterView />
    </component>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import LayoutDefault from './layouts/LayoutDefault.vue'
import { useAuthStore } from './stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const token = window.localStorage.getItem('token')

const layout = computed(() => LayoutDefault)

if (!token) {
    router.replace({ name: 'login' })
}

onMounted(async () => {
    const { login } = await authStore.fetchUserInfo()

    if (login) {
        router.push({ name: 'home' })
    }
})
</script>
