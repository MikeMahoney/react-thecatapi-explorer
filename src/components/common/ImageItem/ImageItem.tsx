import { ArrowIcon } from '../Icons/ArrowIcon/ArrowIcon'
import { HeartIcon } from '../Icons/HeartIcon/HeartIcon'
import './ImageItemStyles.scss'

interface IImageItem {
  url: string
}

const ImageItem: React.FC<IImageItem> = ({ url }: IImageItem) => {
  return (
    <div className='image-item'>
      <div className='image-item__image'>
        <img src={url} />
      </div>
      <div className='image-item__controls'>
        <div className='image-item__controls__score'>
          <div className='upvote'>
            <ArrowIcon />
          </div>
          <div className='value'>{'0'}</div>
          <div className='downvote'>
            <ArrowIcon />
          </div>
        </div>
        <div className='image-item__controls__favourite'>
          <HeartIcon />
        </div>
      </div>
    </div>
  )
}

export default ImageItem
