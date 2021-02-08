import axios from 'axios'

export const baseURL = 'http://localhost:7542/3.0/'
// export const baseURL = 'https://personal-area-it-incubator.herokuapp.com/3.0/'

export const instance = axios.create({
    baseURL,
    withCredentials: true,
})
