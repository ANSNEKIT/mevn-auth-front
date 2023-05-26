<template>
    <header class="header">
        <div class="header__wrap w-100 h-full flex justify-between">
            <template v-if="isAuth">
                <div class="header__left flex">
                    <RouterLink
                        class="header__link"
                        exact-active-class="header__link-exact-active"
                        to="/"
                        >Главная</RouterLink
                    >
                </div>
                <div class="header__right flex">
                    <button
                        type="button"
                        class="header__link"
                        exact-active-class="header__link-exact-active"
                        @click="onLogout"
                    >
                        Выход
                    </button>
                </div>
            </template>

            <template v-else>
                <div class="header__left flex">
                    <RouterLink
                        class="header__link"
                        exact-active-class="header__link-exact-active"
                        to="/login"
                        >Войти</RouterLink
                    >
                    <RouterLink
                        class="header__link"
                        exact-active-class="header__link-exact-active"
                        to="/register"
                        >Регистрация</RouterLink
                    >
                </div>
            </template>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const isAuth = computed(() => authStore.isAuth)

const onLogout = async () => {
    const answer = window.confirm('Вы действительно хотие выйти?')
    if (!answer) {
        return
    }
    await authStore.fetchLogout()
    window.localStorage.removeItem('token')
    router.replace({ name: 'login' })
}
</script>

<style scoped>
.header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 2;

    display: flex;

    width: 100%;
    height: 50px;

    padding: 0 20px;

    background-color: #640085;
}

.header__link {
    display: flex;
    align-items: center;
    padding: 10px;
    height: inherit;
    color: #fff;
    border-radius: unset;
    outline: none;
    transition: all 0.4s ease-in;
}
.header__link:hover {
    color: #000000;
    background-color: #eaacff;
}

.header__link-exact-active {
    background-color: #9500c7;
}
</style>
