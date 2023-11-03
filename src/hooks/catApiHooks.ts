import axios from 'axios'
import { useEffect, useState } from 'react'

export const API_KEY: string = 'c1ee94524d8f355300ffdf9489c9f76a'
const AxiosConfig = {
  headers: {
    'x-api-key':
      'live_ixB1L6U96bIHz5h3bBHcFzNlfcOjNAKey1wEf4lK7o8zZ8BuxhwarFYSphXozMsk'
  }
}

// Get the list of cat images
export const getCatImagesList = () => {
  const [catImagesList, setCatImagesList] = useState([])
  const [isCatImagesLoading, setIsCatImagesLoading] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?limit=10`, AxiosConfig)
      .then((response) => {
        if (response.data.length) {
          setCatImagesList(response.data)
        }
        setIsCatImagesLoading(false)
      })
      .catch(function (error) {
        let message = 'Fetching cat images list'
        if (error.response?.data?.message) {
          console.log(error.response.data)
          message = error.response.data.message
        }
        setErrorMessage(message)
        setIsCatImagesLoading(false)
      })
  }, [])

  return { catImagesList, isCatImagesLoading, errorMessage }
}
