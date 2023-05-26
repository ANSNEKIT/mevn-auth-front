import axios from 'axios'

const baseApiUrl = import.meta.env.VITE_API_URL
const instance = axios.create({
    baseURL: baseApiUrl,
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    console.log(111, config.headers)
    return config
})

export default instance
