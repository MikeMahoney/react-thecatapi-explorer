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

export type CatImageUploadDTO = {
  file: File
}

export type CatImageFavouriteDTO = {
  image_id: string
}

export type CatImageVoteDTO = {
  image_id: string
  value: number
}

export const fetchCatImagesList = (page: number) => {
  return axios.get(
    `https://api.thecatapi.com/v1/images/?limit=10&page=${page}&order=DESC`,
    AxiosConfig
  )
}

export const fetchFavouritesList = () => {
  return axios.get(`https://api.thecatapi.com/v1/favourites`, AxiosConfig)
}

export const fetchVotesList = () => {
  return axios.get(`https://api.thecatapi.com/v1/votes`, AxiosConfig)
}

export const uploadCatImage = (data: CatImageUploadDTO) => {
  return axios.post(
    `https://api.thecatapi.com/v1/images/upload`,
    data,
    AxiosFileConfig
  )
}

export const favouriteCatImage = (data: CatImageFavouriteDTO) => {
  return axios.post(
    `https://api.thecatapi.com/v1/favourites`,
    data,
    AxiosConfig
  )
}

export const unfavouriteCatImage = (id: string) => {
  return axios.delete(
    `https://api.thecatapi.com/v1/favourites/${id}`,
    AxiosConfig
  )
}

export const voteCatImage = (data: CatImageVoteDTO) => {
  return axios.post(`https://api.thecatapi.com/v1/votes`, data, AxiosConfig)
}
