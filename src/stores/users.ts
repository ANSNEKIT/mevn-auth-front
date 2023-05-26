import { IUser } from '@/types'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            users: [] as IUser[],
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
