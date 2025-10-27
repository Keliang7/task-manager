import { http } from 'uview-pro'

export const getTaskList = () => http.get('/task')
