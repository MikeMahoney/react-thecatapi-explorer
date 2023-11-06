import {
  TCatImage,
  TFavourite,
  TVote,
  getCatImagesList,
  getFavouritesList,
  getVotesList
} from 'hooks/catApiHooks'
import './HomeStyles.scss'
import Images from 'components/layout/Images/Images'
import ImageItem from 'components/common/ImageItem/ImageItem'
import { ThreeDots } from 'react-loader-spinner'

interface IHome {}

const Home: React.FC<IHome> = () => {
  const {
    catImagesList,
    page,
    setPage,
    setIsPageLoading,
    catImagesTotal,
    isCatImagesLoading,
    isPageLoading
  } = getCatImagesList()
  const { favouritesList, isFavouritesLoading } = getFavouritesList()
  const { votesList, isVotesLoading } = getVotesList()

  const showLoadMore = catImagesTotal > catImagesList.length

  const onClickLoadMore = () => {
    setIsPageLoading(true)
    setPage(page + 1)
  }

  // Reduce the vote list based on the imageId and sum the values
  const calculateVotes = (imageId: string) => {
    return votesList.reduce((accumulator: number, vote: TVote) => {
      if (vote['image_id'] === imageId) {
        return accumulator + vote['value']
      }
      return accumulator
    }, 0 as number)
  }

  // Search the favourite list based on the imageId and return the Id
  const getFavouriteId = (imageId: string) => {
    let favouriteId = 0
    favouritesList.forEach((favourite: TFavourite) => {
      if (favourite['image_id'] === imageId) {
        favouriteId = favourite.id
      }
    })
    return favouriteId
  }

  return (
    <div className='home'>
      {isCatImagesLoading || isFavouritesLoading || isVotesLoading ? (
        <ThreeDots
          height='80'
          width='80'
          radius='9'
          color='#ff913d'
          ariaLabel='three-dots-loading'
          visible={true}
        />
      ) : !catImagesList.length ? (
        <h2>{'No cat images have been uploaded'}</h2>
      ) : (
        <div className='home__images'>
          <Images>
            {catImagesList.map((catImage: TCatImage, index: number) => (
              <ImageItem
                id={catImage.id}
                url={catImage.url}
                calculatedVoteValue={calculateVotes(catImage.id)}
                favouriteId={getFavouriteId(catImage.id)}
                key={index}
              />
            ))}
          </Images>
          {showLoadMore && (
            <div className='home__images__load-more'>
              {isPageLoading ? (
                <ThreeDots
                  height='80'
                  width='80'
                  radius='9'
                  color='#ff913d'
                  ariaLabel='three-dots-loading'
                  visible={true}
                />
              ) : (
                <button onClick={onClickLoadMore}>{'Load More Cats'}</button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Home
