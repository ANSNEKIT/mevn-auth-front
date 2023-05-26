<template>
    <div>
        <h1 class="text-4xl">App running Electron + Vite + Vue 3</h1>
    </div>
</template>

<script setup lang="ts">
import axios from '../axios'
import { onMounted, ref } from 'vue'
import { IUser } from '@/types'
import { AxiosResponse } from 'axios'
import { useUserStore } from '@/stores/users'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const uStore = useUserStore()
const authStore = useAuthStore()
const users = ref<IUser[]>([])
const router = useRouter()

onMounted(async () => {
    if (!authStore.isAuth) {
        router.push({ name: 'login' })
    }

    console.log('page hove mouned')

    const { data } = await fetchUsers()
    users.value = data
})

const fetchUsers = async (): Promise<AxiosResponse<IUser[]>> => {
    return await axios.post('/users', {})
}
</script>
