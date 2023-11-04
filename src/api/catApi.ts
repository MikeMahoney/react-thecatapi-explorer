import axios from 'axios'

const API_KEY: string =
  'live_ixB1L6U96bIHz5h3bBHcFzNlfcOjNAKey1wEf4lK7o8zZ8BuxhwarFYSphXozMsk'

const AxiosConfig = {
  headers: {
    'x-api-key': API_KEY
  }
}

const AxiosFileConfig = {
  headers: {
    'x-api-key': API_KEY,
    'Content-Type': 'multipart/form-data'
  }
}

export type CatImageFileDTO = {
  file: File
}

export const fetchCatImagesList = () => {
  return axios.get(`https://api.thecatapi.com/v1/images/?limit=10`, AxiosConfig)
}

export const uploadCatImage = (data: CatImageFileDTO) => {
  return axios.post(
    `https://api.thecatapi.com/v1/images/upload`,
    data,
    AxiosFileConfig
  )
}
