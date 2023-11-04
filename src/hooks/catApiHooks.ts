import { fetchCatImagesList } from 'api/catApi'
import { useEffect, useState } from 'react'

// Get the list of cat images
export const getCatImagesList = () => {
  const [catImagesList, setCatImagesList] = useState([])
  const [isCatImagesLoading, setIsCatImagesLoading] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    fetchCatImagesList()
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
