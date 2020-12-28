import {instance} from '../../../i1-main/m3-dal/instance'

type LoginType = {
    error?: string
}

export const LoginAPI = {
    login: async (token: string) => {
        const response = await instance.post<LoginType>('/auth/login', {token})

        return response.data
    },

}
