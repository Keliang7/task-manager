import { http } from 'uview-pro'

export const testHttp = () => http.get('/demo.json')

export const getUserInfo = (id: number) => http.get(`/user/${id}`)

export const loginApi = (data: { username: string, password: string }) => http.post('/auth/login', data)
