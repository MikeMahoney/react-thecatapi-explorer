import { getCatImagesList } from 'hooks/catApiHooks'
import './HomeStyles.scss'
import Images from 'components/layout/Images/Images'
import ImageItem from 'components/common/ImageItem/ImageItem'
import { ThreeDots } from 'react-loader-spinner'

interface IHome {}

type TCatImage = {
  url: string
}

const Home: React.FC<IHome> = () => {
  const { catImagesList, isCatImagesLoading, errorMessage } = getCatImagesList()
  console.log(catImagesList, isCatImagesLoading, errorMessage)

  return (
    <div className='home'>
      {isCatImagesLoading ? (
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
        <Images>
          {catImagesList.map((catImage: TCatImage, index: number) => (
            <ImageItem url={catImage.url} key={index} />
          ))}
        </Images>
      )}
    </div>
  )
}

export default Home
