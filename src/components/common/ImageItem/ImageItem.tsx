import {
  CatImageFavouriteDTO,
  CatImageVoteDTO,
  favouriteCatImage,
  unfavouriteCatImage,
  voteCatImage
} from 'api/catApi'
import { ArrowIcon } from '../Icons/ArrowIcon/ArrowIcon'
import { HeartIcon } from '../Icons/HeartIcon/HeartIcon'
import './ImageItemStyles.scss'
import { useState } from 'react'

interface IImageItem {
  id: string
  url: string
  calculatedVoteValue: number
  favouriteId: number
}

const ImageItem: React.FC<IImageItem> = ({
  id,
  url,
  calculatedVoteValue = 0,
  favouriteId = 0
}: IImageItem) => {
  const [voteValue, setVoteValue] = useState<number>(calculatedVoteValue)
  const [isUpvoted, setIsUpvoted] = useState<boolean>(false)
  const [isDownvoted, setIsDownvoted] = useState<boolean>(false)
  const [isFavourite, setIsFavourite] = useState<boolean>(!!favouriteId)

  const onClickFavourite = () => {
    if (!isFavourite) {
      const favouriteData: CatImageFavouriteDTO = {
        image_id: id
      }
      favouriteCatImage(favouriteData)
      setIsFavourite(true)
    } else {
      unfavouriteCatImage(id)
      setIsFavourite(true)
    }
  }

  const onClickUpvote = () => {
    if (isUpvoted) return

    const upvoteData: CatImageVoteDTO = {
      image_id: id,
      value: 1
    }
    voteCatImage(upvoteData)
    setIsUpvoted(true)
    setIsDownvoted(false)
    setVoteValue(voteValue + 1)
  }

  const onClickDownvote = () => {
    if (isDownvoted) return

    const downvoteData: CatImageVoteDTO = {
      image_id: id,
      value: -1
    }
    voteCatImage(downvoteData)
    setIsDownvoted(true)
    setIsUpvoted(false)
    setVoteValue(voteValue - 1)
  }

  return (
    <div className='image-item'>
      <div className='image-item__image'>
        <a target='_blank' rel='noreferrer' href={url}>
          <img src={url} />
        </a>
      </div>
      <div className='image-item__controls'>
        <div className='image-item__controls__score'>
          <div
            className={`upvote ${isUpvoted && 'upvote--selected'}`}
            onClick={onClickUpvote}
          >
            <ArrowIcon />
          </div>
          <div className='value'>{voteValue}</div>
          <div
            className={`downvote ${isDownvoted && 'downvote--selected'}`}
            onClick={onClickDownvote}
          >
            <ArrowIcon />
          </div>
        </div>
        <div
          className={`image-item__controls__favourite ${
            isFavourite && 'image-item__controls__favourite--selected'
          }`}
          onClick={onClickFavourite}
        >
          <HeartIcon />
        </div>
      </div>
    </div>
  )
}

export default ImageItem
