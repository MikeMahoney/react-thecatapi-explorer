import { getCatImagesList } from 'hooks/catApiHooks'
import './HomeStyles.scss'

interface IHome {}

const Home: React.FC<IHome> = () => {
  const { catImagesList, isCatImagesLoading, errorMessage } = getCatImagesList()
  console.log(catImagesList, isCatImagesLoading, errorMessage)

  return <div className='home'>{'IMAGES'}</div>
}

export default Home
