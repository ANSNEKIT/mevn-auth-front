import { defineStore } from 'pinia'
import axios from '../axios'
import { ILogin, IRegister } from '@/types'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuth: false,
        token: null,
    }),
    actions: {
        async fetchLogin(loginForm: ILogin): Promise<any> {
            try {
                const { data } = await axios.post('/signin', loginForm)
                if (data.token) {
                    this.isAuth = true
                    this.token = data.token
                    return data
                }
            } catch (error) {
                console.log(error)
                this.isAuth = false
                this.token = null
                return null
            }
        },
        async fetchRegistration(payload: IRegister) {
            try {
                const { data } = await axios.post('/signup', payload)
                if (data.token) {
                    this.isAuth = true
                    this.token = data.token
                    return data
                }
            } catch (error) {
                console.log(error)
                this.isAuth = false
                this.token = null
                return null
            }
        },
        async fetchUserInfo(): Promise<any> {
            try {
                const { data } = await axios.get('/info')
                if (data.success) {
                    this.isAuth = true
                    return data
                }
            } catch (error) {
                console.log(error)
                this.isAuth = false
                return null
            }
        },
        async fetchLogout() {
            try {
                await axios.get('/logout')
            } catch (error) {
                console.log(error)
            }

            this.isAuth = false
            this.token = null
        },
    },
})
