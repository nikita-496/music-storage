import axios from 'axios'

const baseUrl = 'http://localhost:4000/api/v1';

const url = (url: string): string => `${baseUrl}${url}`

interface endPoint {
  content: string
}

const api: endPoint = {
  content: url('/content')
}

export const postJson =  (url: string, data: object) => {
  return axios.post(url, data)
}

export {api as API}