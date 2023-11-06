import {
  fetchCatImagesList,
  fetchFavouritesList,
  fetchVotesList
} from 'api/catApi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export type TCatImage = {
  id: string
  url: string
}

// Get the list of cat images
export const getCatImagesList = () => {
  const [catImagesList, setCatImagesList] = useState<TCatImage[]>([])
  const [page, setPage] = useState<number>(0)
  const [catImagesTotal, setCatImagesTotal] = useState<number>(0)
  const [isCatImagesLoading, setIsCatImagesLoading] = useState<boolean>(true)
  const [isPageLoading, setIsPageLoading] = useState<boolean>(false)

  useEffect(() => {
    fetchCatImagesList(page)
      .then((response) => {
        if (response.data.length) {
          const nextPage: TCatImage[] = response.data
          // Create a new list so React rerenders the page
          const newList: TCatImage[] = [...catImagesList, ...nextPage]
          setCatImagesList(newList)
        }
        if (response.headers) {
          setCatImagesTotal(response.headers['pagination-count'] || 0)
        }
        setIsCatImagesLoading(false)
        setIsPageLoading(false)
      })
      .catch(function (error) {
        let message = 'Fetching cat images list'
        if (error.response?.data) {
          message = error.response.data
        }
        toast.error(`Error: ${message}`)
        setIsCatImagesLoading(false)
        setIsPageLoading(false)
      })
  }, [page])

  return {
    catImagesList,
    page,
    setPage,
    setIsPageLoading,
    catImagesTotal,
    isCatImagesLoading,
    isPageLoading
  }
}

export type TFavourite = {
  id: number
  image_id: string
}

// Get the list of favourites
export const getFavouritesList = () => {
  const [favouritesList, setFavouritesList] = useState<TFavourite[]>([])
  const [isFavouritesLoading, setIsFavouritesLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchFavouritesList()
      .then((response) => {
        if (response.data.length) {
          setFavouritesList(response.data)
        }
        setIsFavouritesLoading(false)
      })
      .catch(function (error) {
        let message = 'Fetching favourites list'
        if (error.response?.data) {
          message = error.response.data
        }
        toast.error(`Error: ${message}`)
        setIsFavouritesLoading(false)
      })
  }, [])

  return { favouritesList, isFavouritesLoading }
}

export type TVote = {
  image_id: string
  value: number
}

// Get the list of votes
export const getVotesList = () => {
  const [votesList, setVotesList] = useState<TVote[]>([])
  const [isVotesLoading, setIsVotesLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchVotesList()
      .then((response) => {
        if (response.data.length) {
          setVotesList(response.data)
        }
        setIsVotesLoading(false)
      })
      .catch(function (error) {
        let message = 'Fetching votes list'
        if (error.response?.data) {
          message = error.response.data
        }
        toast.error(`Error: ${message}`)
        setIsVotesLoading(false)
      })
  }, [])

  return { votesList, isVotesLoading }
}
