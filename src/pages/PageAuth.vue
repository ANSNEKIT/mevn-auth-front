<template>
    <div class="flex justify-center items-center w-screen h-screen p-4 shadow-2 border-round">
        <div class="w-2/3">
            <div class="field flex flex-column mb-5">
                <span class="group p-float-label">
                    <InputText
                        id="email"
                        v-model="email"
                        type="text"
                        name="email"
                        class="w-full"
                        :class="{ 'p-invalid': errorEmail }"
                        aria-describedby="text-error"
                    />
                    <label
                        for="email"
                        class="block text-black text-base font-medium group-focus-within:text-white"
                        >Email</label
                    >
                </span>
                <small class="p-error" id="text-error">{{ errorEmail || '&nbsp;' }}</small>
            </div>
            <div class="field flex flex-column">
                <span class="group p-float-label">
                    <InputText
                        id="password"
                        v-model="password"
                        type="password"
                        name="password"
                        class="w-full"
                        :class="{ 'p-invalid': errorPassword }"
                        aria-describedby="text-error"
                    />
                    <label
                        for="password"
                        class="block text-black text-base font-medium group-focus-within:text-white"
                        >Пароль</label
                    >
                </span>
                <small class="p-error" id="text-error">{{ errorPassword || '&nbsp;' }}</small>
            </div>

            <Button
                type="button"
                label="Войти"
                icon="pi pi-user"
                class="w-full"
                :disabled="!formMeta.valid"
                @click="onLogin"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { ILogin } from '@/types'
import { yupEmail } from '@/validation'
import { yupPassword } from '@/validation'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const { meta: formMeta, handleSubmit, resetForm } = useForm<ILogin>()
const { value: email, errorMessage: errorEmail } = useField<string>('email', yupEmail)
const { value: password, errorMessage: errorPassword } = useField<string>('password', yupPassword)

if (authStore.isAuth) {
    router.push({ name: 'home' })
}

const onLogin = handleSubmit(async (values) => {
    const data = await authStore.fetchLogin(values)

    if (!data.token) {
        alert('Не удалось авторизоваться')
        return
    }

    if (authStore.isAuth) {
        window.localStorage.setItem('token', data.token)
        resetForm()
        router.push({ name: 'home' })
    }
})
</script>
