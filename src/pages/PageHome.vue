<template>
    <div class="container mx-auto mt-10">
        <template v-if="isLoading">
            <h1>Загрузка</h1>
        </template>
        <template v-else>
            <h1 class="text-4xl mb-10">Список пользователей</h1>

            <div class="flex flex-column gap-4">
                <Card v-for="user of users" :key="'user' + user.id">
                    <template #title>{{ user.name }}</template>
                    <template #content>
                        email: <strong>{{ user.email }}</strong>
                    </template>
                </Card>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import axios from '../axios'
import Card from 'primevue/card'
import { onMounted, ref } from 'vue'
import { IUser } from '@/types'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()
const users = ref<IUser[]>([])
const isLoading = ref<boolean>(false)

onMounted(async () => {
    if (!authStore.isAuth) {
        router.push({ name: 'login' })
    }

    await fetchUsers()
})

const fetchUsers = async (): Promise<void> => {
    try {
        isLoading.value = true
        const { data } = await axios.post('/users')
        users.value = data.users
        console.log(111, data.users)
    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false
    }
}
</script>
