import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('auth', {
    state: () => {
        return {
            isAuth: false,
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
