import {instance} from '../../../i1-main/m3-dal/instance'
import {UserType} from "../../../i1-main/m2-bll/appReducer";

type LoginType = {
    error?: string
}
type MeType = UserType & {
    error?: string
}

export const LoginAPI = {
    login: async (token: string) => {
        const response = await instance.post<LoginType>('/auth/login', {token})

        return response.data
    },
    me: async () => {
        const response = await instance.get<MeType>('/auth/me')

        return response.data
    },

}
