import { ReactNode } from 'react'
import './CardStyles.scss'

interface ICard {
  title?: string
  children: ReactNode
}

const Card: React.FC<ICard> = ({ title, children }: ICard) => {
  return (
    <div className='card'>
      {title && <div className='card__header'>{title}</div>}
      <div className='card__content'>{children}</div>
    </div>
  )
}

export default Card
