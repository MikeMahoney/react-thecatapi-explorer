import './ImagesStyles.scss'
import { ReactNode } from 'react'

interface IImages {
  children: ReactNode
}

const Images: React.FC<IImages> = ({ children }) => {
  return <div className='images'>{children}</div>
}

export default Images
